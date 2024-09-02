import hands from "../assets/hands.jpg";
import yoga from "../assets/yoga.jpg";
import meditation from "../assets/meditation.jpg";
import depression from "../assets/Depression.jpg";
import girl1 from "../assets/customers/girl1.jpeg";
import girl2 from "../assets/customers/girl2.jpeg";
import girl3 from "../assets/customers/girl3.jpeg";
import girl4 from "../assets/customers/girl4.jpeg";
import girl5 from "../assets/customers/girl5.jpeg";
import girl6 from "../assets/customers/girl6.jpeg";
import boy1 from "../assets/customers/boy1.jpeg";
import boy2 from "../assets/customers/boy2.jpeg";
import boy3 from "../assets/customers/boy3.jpeg";
export const TestDetailData = {
    "Anxiety": {
        id: 1,
        name: "Anxiety Disorder Test",
        about: "Take our short online anxiety screening test, and learn whether you may be living with excessive anxiety.",
        discription:"Anxiety is the most common mental health condition, affecting over 40 million adults in the U.S. and 275 million worldwide. While most people experience some degree of anxiousness and stress in everyday life, those with a severe anxiety disorder often feel trapped in a vicious cycle of rumination, inaction, and self-doubt, and could benefit from various treatment options.",
        img: hands,
        sufferNumber:'40 Million',
        sufferAbout:'U.S. adults suffer from anxiety',
        reviews: [
            { name: 'Arjun Yadav', review: "The Anxiety Test on @Righttrigs was so insightful. It helped me understand my triggers and manage them effectively. I finally feel in control! 🌟" ,date:"17 July,2024",img:boy1},
            { name: 'Aditya Thakur', review: "Righttrigs’ Anxiety Test opened my eyes to the severity of my anxiety. The guidance I received afterward was life-changing. 💙" ,date:"25 June,2024",boy2:boy2},
            { name: 'Lav Maurya', review: "Taking the Anxiety Test was the first step in my healing journey. @Righttrigs made it so easy to get the help I needed. 🙏" ,date:"2 Aug,2024",img:boy3}
        ]

    },
    "Depression": {
        id: 2,
        name: "Depression Test",
        about: "Wondering if it’s just a phase or something more? Take our short online depression test to find out if you’re living with depression.",
        discription:"Depression is the leading cause of disability worldwide and one of the most common mental health conditions globally. That's right: depression mood disorder can be a serious illness and knows no borders",
        img: depression,
        sufferNumber:'Over 17 Million',
        sufferAbout:'U.S. adults suffer from depression',
        reviews: [
            { name: 'Neha Gupta', review: "The Depression Test on Righttrigs gave me clarity on what I was feeling. It was the first step toward getting the support I needed. 💪",date:"5 June,2024",img:girl1 },
            { name: 'Varun Dabral', review: "I can’t thank @Righttrigs enough for their Depression Test. It pinpointed my struggles and connected me with the right resources. 🌈",date:"18 May,2024" },
            { name: 'Himanshu', review: "Righttrigs’ Depression Test helped me understand my mental state better and led me to seek the right help. I’m so grateful! ❤️",date:"1 Sept,2024" }
        ]
    },
    "Bipolar Disorder": {
        id: 3,
        name: "Bipolar Disorder Test",
        about: "Is it just a phase or something more? Take our short online bipolar disorder test to find out if you're living with bipolar disorder.",
        discription:"While everyone experiences normal ups and downs in their day-to-day lives, those who experience bipolar disorder go through shifts in energy and mood that are more severe. Our free bipolar test will help you better understand your experience.",
        img:yoga,
        sufferNumber:'4.4%',
        sufferAbout:'U.S. adults experience bipolar disorder at some time in their lives',
        reviews: [
            { name: 'Sakshi Madan', review: "The Bipolar Test on Righttrigs helped me recognize the symptoms I’ve been struggling with for years. Now, I’m on the right path to managing it. 🙏" ,date:"25 June,2024",img:girl2},
            { name: 'Mohit Sharma', review: "I finally have a better understanding of my mood swings thanks to @Righttrigs’ Bipolar Test. It’s made such a difference in my life. 🌈" ,date:"10 Aug,2024"},
            { name: 'Seema Mishra', review: "Righttrigs’ Bipolar Test was thorough and accurate. It helped me seek the right treatment and start my journey to stability. 💪" ,date:"6 May,2024",img:girl3}
        ]
    },
    "OCD": {
        id: 4,
        name: "Obsessive Compulsive Disorder (OCD) Test",
        about: "Is it just a phase or something more? Take our short online OCD test to find out if you're living with obsessive compulsive disorder (OCD).",
        discription:"It's common for people to find themselves caught up in worry and fixation, but for the many adults experiencing OCD, those unwanted feelings and other OCD symptoms become amplified and can seem to take over in their daily lives. Our obsessive compulsive disorder test will help you better understand what you’re experiencing.",
        img: meditation,
        sufferNumber:'2.2 Million',
        sufferAbout:'U.S. adults suffer from OCD',
        reviews: [
            { name: 'Saksham', review: "The OCD Test on Righttrigs was eye-opening. It helped me recognize patterns I wasn’t aware of, and now I’m on the path to better management. 🧠",date:"8 May ,2024" },
            { name: 'Aditya Rana', review: "I didn’t realize how much OCD was affecting my life until I took the test on @Righttrigs. It’s been a game-changer for me. 🌟" ,date:"9 June,2024"},
            { name: 'Mohan Shukla', review: "Righttrigs’ OCD Test gave me the clarity I needed to start my treatment. I’m so relieved to finally understand what’s been going on. 💙",date:"3 Sept,2024" }
        ]
    },
    "Panic Disorder": {
        id: 5,
        name: "Panic Disorder Test",
        about: "Is it just a phase or something more? Take our short online panic disorder test to find out if you're living with panic disorder.",
        discription:"It's very common to experience panic symptoms before upcoming events or things outside your control, but people who experience panic disorder may have sudden intense bouts of panic seemingly out of nowhere. Experiencing panic attacks leave people feeling exhausted physically and mentally.",
        img:yoga,
        sufferNumber:'6 Million',
        sufferAbout:'U.S. adults suffer from panic disorder. Women are twice as likely to be affected as men.',
        reviews: [
            { name: 'Muskan Gupta', review: "The Panic Disorder Test on Righttrigs helped me understand my panic attacks better. It’s been a relief to know I’m not alone. 💙" ,date:"7 May,2024",img:girl4},
            { name: 'Meghna Sharma', review: "Righttrigs’ Panic Disorder Test provided the clarity I needed to start managing my panic attacks. I’m so grateful for the support! 🌈" ,date:"12 May,2024",img:girl5},
            { name: 'Yash Sharma', review: "I finally understand what triggers my panic attacks thanks to @Righttrigs’ Panic Disorder Test. I feel empowered to take control. 💪",date:"25 June,2024" }
        ]
    },
    "Insomnia": {
        id: 6,
        name: "Insomnia Test",
        about: "Is it just a messed up sleep schedule or something more keeping you awake? Take our short online sleep insomnia test to find out if you're living with the sleep disorder insomnia.",
        discription:"Many people experience difficulty sleeping or an unpredictable sleep pattern. But for people with untreated insomnia, poor sleep is so frequent that it adds stress and makes things harder in daily life; it can even lead to an anxiety disorder or depression.",
        img: depression,
        sufferNumber:'50-70 Million',
        sufferAbout:'U.S. adults suffer from Insomnia',
        reviews: [
            { name: 'Harsh Verma', review: "The Insomnia Test on Righttrigs identified the root causes of my sleep issues. I’m finally getting the rest I need! 😴" ,date:"2 July,2024"},
            { name: 'Sanyam', review: "Thanks to @Righttrigs’ Insomnia Test, I discovered what was keeping me awake at night. Now, I sleep soundly. 🛌" ,date:"5 May,2024"},
            { name: 'Rekha', review: "The insights from Righttrigs’ Insomnia Test have been invaluable. I’m now able to manage my sleep problems effectively. 🌟" ,date:"17 June,2024" ,img:girl6}
        ]
    },
};
