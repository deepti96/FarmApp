
import nltk
import warnings
from googletrans import Translator
translator=Translator()
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import random
import string # to process standard python strings

warnings.filterwarnings("ignore")
mydict={
"how seed treatment can be done?":"Seed treatment is done to control seed borne diseases. Bavistin @ 2.5 g/kg of seeds. or Beam 75 @ 0.6 g/kg of seeds|बीज जनित रोगों को नियंत्रित करने के लिए बीजोपचार किया जाता है। बाविस्टिन @ 2.5 ग्राम / किग्रा बीज। या बीम 75 @ 0.6 ग्राम / किग्रा बीज|",
"how seed treatment can be done":"Seed treatment is done to control seed borne diseases. Bavistin @ 2.5 g/kg of seeds. or Beam 75 @ 0.6 g/kg of seeds|बीज जनित रोगों को नियंत्रित करने के लिए बीजोपचार किया जाता है। बाविस्टिन @ 2.5 ग्राम / किग्रा बीज। या बीम 75 @ 0.6 ग्राम / किग्रा बीज|",
"how seedling treatment is done at nursery bed?":"Seedling treatment is done by application of: Furadon 3G @ 250 g/100 sq.m. to make the seedling resistant for at least 25-30 days against gall midge. Seedling root dip before transplanting to the mainfield for 10- 12 hours in chlorpyriphos solution @ 1ml/liter of water| सीडलिंग उपचार के आवेदन के द्वारा किया जाता है: फुरदोन 3 जी @ 250 ग्राम / 100 वर्ग मीटर। पित्त के खिलाफ कम से कम 25-30 दिनों के लिए अंकुर प्रतिरोधी बनाने के लिए। क्लोरपायरीफॉस के घोल में 10- 12 घंटे तक मेनफील्ड में रोपाई करने से पहले सीडलिंग रूट डुबकी|",
"how seedling treatment is done at nursery bed":"Seedling treatment is done by application of: Furadon 3G @ 250 g/100 sq.m. to make the seedling resistant for at least 25-30 days against gall midge. Seedling root dip before transplanting to the mainfield for 10- 12 hours in chlorpyriphos solution @ 1ml/liter of water| सीडलिंग उपचार के आवेदन के द्वारा किया जाता है: फुरदोन 3 जी @ 250 ग्राम / 100 वर्ग मीटर। पित्त के खिलाफ कम से कम 25-30 दिनों के लिए अंकुर प्रतिरोधी बनाने के लिए। क्लोरपायरीफॉस के घोल में 10- 12 घंटे तक मेनफील्ड में रोपाई करने से पहले सीडलिंग रूट डुबकी|",
"what will be the planting distance for high yielding varieties, hybrid rice and sri method?":"Planting distance for HYV 20cmX10cm or 20cmX15cm or 15cmX10cm Hybrid rice 20cmX20cm. SRI method 25cmX25cm or 30cmX30cm| HYV 20cmX10cm या 20cmX15cm या 15cmX10cm हाइब्रिड चावल 20cmX20cm के लिए रोपण दूरी। SRI विधि 25cmX25cm या 30cmX30cm|",
"what will be the planting distance for high yielding varieties, hybrid rice and sri method":"Planting distance for HYV 20cmX10cm or 20cmX15cm or 15cmX10cm Hybrid rice 20cmX20cm. SRI method 25cmX25cm or 30cmX30cm| HYV 20cmX10cm या 20cmX15cm या 15cmX10cm हाइब्रिड चावल 20cmX20cm के लिए रोपण दूरी। SRI विधि 25cmX25cm या 30cmX30cm|",
"what will be recommended fertilizer dose for rainfed upland, kharif and rabi rice":"Fertiliser dose for unfavourable rainfed upland NPK will be @ 40-20-20 kg/ha Lowland Kharif irrigated rice 60-30-30 kg/ha Rabi rice 80-40-40 kg/ha| प्रतिकूल वर्षा के लिए उर्वरक की खुराक एनपीके @ 40-20-20 किग्रा / हेक्टेयर होगी। तराई खरीफ सिंचित धान 60-30-30 किग्रा। / हेक्टेयर रबी चावल 80-40-40 किग्रा / हेक्टेयर",
"what will be recommended fertilizer dose for rainfed upland, kharif and rabi rice?":"Fertiliser dose for unfavourable rainfed upland NPK will be @ 40-20-20 kg/ha Lowland Kharif irrigated rice 60-30-30 kg/ha Rabi rice 80-40-40 kg/ha| प्रतिकूल वर्षा के लिए उर्वरक की खुराक एनपीके @ 40-20-20 किग्रा / हेक्टेयर होगी। तराई खरीफ सिंचित धान 60-30-30 किग्रा। / हेक्टेयर रबी चावल 80-40-40 किग्रा / हेक्टेयर",
"what will be recommended fertilizer dose for hybrid rice and aromatic rice?":"Fertiliser dose for Hybrid rice N, P & K 100-60-60 kg/ha Aromatic rice N,P,K,Zn 60-30-30-25 kg/ha| हाइब्रिड चावल एन, पी एंड के के लिए उर्वरक की खुराक 100-60-60 किग्रा / हेक्टेयर सुगंधित चावल एन, पी, के, जेडएन 60-30-30-25 किग्रा / हेक्टेयर|",
"what will be recommended fertilizer dose for hybrid rice and aromatic rice":"Fertiliser dose for Hybrid rice N, P & K 100-60-60 kg/ha Aromatic rice N,P,K,Zn 60-30-30-25 kg/ha| हाइब्रिड चावल एन, पी एंड के के लिए उर्वरक की खुराक 100-60-60 किग्रा / हेक्टेयर सुगंधित चावल एन, पी, के, जेडएन 60-30-30-25 किग्रा / हेक्टेयर|",
"how fertilizer management can be done in nursery bed?":"Fertiliser dose for 10 decimal area is as follows. A. For 10 decimal nursery area, it is recommended to use 2 quintal of FYM, 4.5 kg of Urea, 13 kg of SSP and 3.5 kg of MOP. If required 4.5 kg Urea may be applied as top dressing after 15 days of sowing| 10 दशमलव क्षेत्र के लिए उर्वरक की खुराक इस प्रकार है। A. 10 दशमलव नर्सरी क्षेत्र के लिए, 2 क्विंटल FYM, 4.5 किलो यूरिया, 13 किलोग्राम SSP और 3.5 किलोग्राम MOP का उपयोग करने की सिफारिश की जाती है। यदि आवश्यक हो तो बुवाई के 15 दिनों के बाद 4.5 ड्रेसिंग यूरिया को शीर्ष ड्रेसिंग के रूप में लागू किया जा सकता है|",
"how fertilizer management can be done in nursery bed":"Fertiliser dose for 10 decimal area is as follows. A. For 10 decimal nursery area, it is recommended to use 2 quintal of FYM, 4.5 kg of Urea, 13 kg of SSP and 3.5 kg of MOP. If required 4.5 kg Urea may be applied as top dressing after 15 days of sowing| 10 दशमलव क्षेत्र के लिए उर्वरक की खुराक इस प्रकार है। A. 10 दशमलव नर्सरी क्षेत्र के लिए, 2 क्विंटल FYM, 4.5 किलो यूरिया, 13 किलोग्राम SSP और 3.5 किलोग्राम MOP का उपयोग करने की सिफारिश की जाती है। यदि आवश्यक हो तो बुवाई के 15 दिनों के बाद 4.5 ड्रेसिंग यूरिया को शीर्ष ड्रेसिंग के रूप में लागू किया जा सकता है|",
"what is azolla?":"Azolla is a water fern. It fixes atmospheric nitrogen into the soil with the help of blue green algae by symbiosis process. Its application improves soil health and soil fertility.|एजोला पानी का फर्न है। यह सहजीवी प्रक्रिया द्वारा नीले हरे शैवाल की मदद से मिट्टी में वायुमंडलीय नाइट्रोजन को ठीक करता है। इसका अनुप्रयोग मृदा स्वास्थ्य और मिट्टी की उर्वरता में सुधार करता है।",
"what is azolla":"Azolla is a water fern. It fixes atmospheric nitrogen into the soil with the help of blue green algae by symbiosis process. Its application improves soil health and soil fertility.|एजोला पानी का फर्न है। यह सहजीवी प्रक्रिया द्वारा नीले हरे शैवाल की मदद से मिट्टी में वायुमंडलीय नाइट्रोजन को ठीक करता है। इसका अनुप्रयोग मृदा स्वास्थ्य और मिट्टी की उर्वरता में सुधार करता है।",
"I am sorry! I don't understand you":"I am sorry! I don't understand you"
}



f=open('chatbot.txt','r',errors = 'ignore')
raw=f.read()
raw=raw.lower()# converts to lowercase
sent_tokens = nltk.sent_tokenize(raw)# converts to list of sentences 
word_tokens = nltk.word_tokenize(raw)# converts to list of words


sent_tokens[:2]


word_tokens[:5]


lemmer = nltk.stem.WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]
remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))


GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up","hey",)
GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there", "hello", "I am glad! You are talking to me"]



# Checking for greetings
def greeting(sentence):
    """If user's input is a greeting, return a greeting response"""
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)





# Generating response
def response(user_response):
    robo_response=''
    sent_tokens.append(user_response)
    TfidfVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
    tfidf = TfidfVec.fit_transform(sent_tokens)
    vals = cosine_similarity(tfidf[-1], tfidf)
    idx=vals.argsort()[0][-2]
    flat = vals.flatten()
    flat.sort()
    req_tfidf = flat[-2]
    if(req_tfidf==0):
        robo_response=robo_response+"I am sorry! I don't understand you"
        return robo_response
    else:
        robo_response = robo_response+sent_tokens[idx]
        return robo_response


def bot(user_response):
    user_response = user_response.replace('"', '')
    user_response = translator.translate(user_response)
    user_response = str(user_response.text)
    print(user_response)
    flag=True
    flag1=True
    while(flag==True):
        user_response=user_response.lower()
        if(user_response!='bye' and flag1==True):
            if(user_response=='thanks' or user_response=='thank you' ):
                flag=False
                return "You are welcome.."
            else:
                if(greeting(user_response)!=None):
                    return  greeting(user_response)
                else:
                    print("ROBO: ",end="")
                    ans=response(user_response)
                    if(ans=="I am sorry! I don't understand you"):
                            flag1=False
                            import make_call
                            return "Calling Expert...."
                    else:
                            return mydict[ans]
        else:
            flag=False
            return "Bye! take care.."
