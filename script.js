/*
 * Developer's Name : Rishab.H from CSE Department Panimalar Engineering College
 */

let docTitle = document.title ;

window.addEventListener("blur", () => 
{
    document.title = "Don't Switch tab - Rishab" ;
}) ;

window.addEventListener("focus", () => 
{
    document.title = docTitle ;
}) ;


const quizData = [
    {
        // 1
        question : "1. What is a part of a database that holds only one type of information ?",
        a : "Report",
        b : "Field",
        c : "Record", 
        d : "File",
        correct : "b",
    },

    {
        // 2
        question : "2. '.MOV' extension refers usually to what kind of file ?",
        a : "Image file",
        b : "Animation/Movie file",
        c : "Audio file",
        d : "MS Office document",
        correct : "b",
    },

    {
        // 3
        question : "3. Who developed Yahoo ?",
        a : "Dennis Ritchie & Ken Thompson",
        b : "David Filo & Jerry Yang",
        c : "Vint Cerf & Robert Kahn",
        d : "Steve Case & Jeff Bezos",
        correct : "b",
    },

    {
        // 4
        question : "4. What does the term PLC stand for ?",
        a : "Programmable Lift Computer",
        b : "Program List Control",
        c : "Programmable Logic Controller",
        d : "Piezo Lamp Connector",
        correct : "c",
    },

    {
        // 5
        question : "5. What do we call a network whose elements may be separated by some distance ?\n(It usually involves two or more small networks and dedicated high-speed telephone lines)",
        a : "URL (Universal Resource Locator)",
        b : "LAN (Local Area Network)",
        c : "WAN (Wide Area Network)",
        d : "World Wide Web",
        correct : "c",
    },

    {
        // 6
        question : "6. Which of the following is a superclass of all classes in Java ?",
        a : "Object",
        b : "String",
        c : "Class",
        d : "System",
        correct : "a",
    },

    {
        // 7
        question : "7. Which of the following is a data structure that allows elements to be added or removed from both ends ?",
        a : "Stack",
        b : "Queue",
        c : "LinkedList",
        d : "ArrayList",
        correct : "c",
    },

    {
        // 8
        question : "8. In Python, what is the best way to pass a large number of arguments to a function ?",
        a : "Using a 2D array",
        b : "Using a dictionary",
        c : "Using a list",
        d : "Using multiple arguments",
        correct : "b",
    },

    {
        // 9
        question : "9. What is the output of the following python code ?\nCode :\nS=\"python is easy\"\nprint(S.capitalize())",
        a : "Python is easy",
        b : "PYTHON IS EASY",
        c : "Python is Easy",
        d : "Python Is Easy",
        correct : "a",
    },

    {
        // 10
        question : "10. Which environment variable is used to set the java path ?",
        a : "MAVEN_Path",
        b : "JavaPATH",
        c : "JAVA",
        d : "JAVA_HOME",
        correct : "d",
    },

    {
        // 11
        question : "11. What is Truncation in Java ?",
        a : "Floating-point value assigned to a Floating type",
        b : "Floating-point value assigned to an Integer type",
        c : "Integer value assigned to Floating type",
        d : "Integer value assigned to Floating type",
        correct : "b",
    },

    {
        // 12
        question : "12. Which of the below is not a Java Profiler ?",
        a : "JProfiler",
        b : "Eclipse Profiler",
        c : "JVM",
        d : "JConsole",
        correct : "c",
    },

    {
        // 13
        question : "13. Which class provides system independent server side implementation ?",
        a : "Server",
        b : "ServerReader",
        c : "Socket",
        d : "ServerSocket",
        correct : "d",
    },

    {
        // 14
        question : "14.What will be the value of the following assignment expression ?\n(x = foo())!= 1(considering foo() returns 2)",
        a : "2",
        b : "True",
        c : "1",
        d : "0",
        correct : "a",
    },

    {
        // 15
        question : "15. An uninitialized pointer in C is called ___.",
        a : "Void pointer",
        b : "Empty pointer",
        c : "Invalid pointer",
        d : "Wild pointer",
        correct : "d",
    },

    {
        // 16
        question : "16. Which of the following is a Scalar Data Type",
        a : "Float",
        b : "Union",
        c : "Array",
        d : "Pointer",
        correct : "a",
    },

    {
        // 17
        question : "17. When was the first version of Microsoft SQL Server released ?",
        a : "1991",
        b : "1990",
        c : "1988",
        d : "1983",
        correct : "c",
    },

    {
        // 18
        question : "18. What is the Codename for SQL Server 2012 ?",
        a : "Katmai",
        b : "Denali",
        c : "Hekaton",
        d : "Kilimanjaro",
        correct : "b",
    },

    {
        // 19
        question : "19. Data types in SQL Server are organized into how many categories ?",
        a : "6",
        b : "8",
        c : "9",
        d : "10",
        correct : "a",
    },

    {
        // 20
        question : "20. Which module in the python standard library parses options received from the command line ?",
        a : "getarg",
        b : "getopt",
        c : "main",
        d : "os",
        correct : "b",
    },

    {
        // 21
        question : "21. What is the return value of \"math.ceil(3.4)\" in python ?",
        a : "3",
        b : "4",
        c : "3.0",
        d : "4.0",
        correct : "b",
    },

    {
        // 22
        question : "22. The technology which uses the concept of neural network of human is ____ .",
        a : "Artificial Intelligence",
        b : "Machine Learning",
        c : "Deep Learning",
        d : "AIML",
        correct : "c",
    },

    {
        // 23
        question : "23.The method of protecting information and communication through the use of codes so only intended can read the data is ____ .",
        a : "Phishing",
        b : "Firewall",
        c : "Cryptography",
        d : "VPN",
        correct : "c",
    },

    {
        // 24
        question : "24. The network security device that monitors incoming and outgoing network traffic based on security polices is ____ .",
        a : "Network Layer",
        b : "Firewall",
        c : "Botnet",
        d : "Data breach",
        correct : "b",
    },

    {
        // 25
        question : "25. Which one of the following services are provided by cloud ?",
        a : "Network Service",
        b : "Storage Service",
        c : "Desk Service",
        d : "Iaas",
        correct : "d",
    },

    {
        // 26
        question : "26. Which of the following option is not the cloud vendors ?",
        a : "IBM",
        b : "Univa",
        c : "Tencent",
        d : "Oracle",
        correct : "b",
    },

    {
        // 27
        question : "27. The technology which is used to connect devices to facilitate communication between cloud and devices and between the devices is ____ .",
        a : "Cloud Computing",
        b : "Internet of Things",
        c : "Computer Networks",
        d : "Artificial Intelligence",
        correct : "b",
    },

    {
        // 28
        question : "28. What is a virtual machine(VM) in Cloud Computing ?",
        a : "A tool for managing cloud resources",
        b : "A physical server used to host cloud applications",
        c : "A software application that runs on a server",
        d : "An emulation of a physical computer system",
        correct : "d",
    },

    {
        // 29
        question : "29. What is cloud bursting ?",
        a : "The process of moving data from one cloud to another",
        b : "The process of backing up data to a cloud storage service",
        c : "The process of scaling up a private cloud to meet demand by using resources from a public cloud",
        d : "The process of migrating applications to the cloud",
        correct : "c",
    },

    {
        // 30
        question : "30. What is the role of a hypervisor in cloud computing ?",
        a : "To store and manage data in the cloud",
        b : "To monitor and manage network traffic in the cloud",
        c : "To provide a way for users to access cloud services",
        d : "To manage and allocate virtualized resources to virtual machines",
        correct : "d",
    },

] ;


const quiz = document.getElementById('quiz') ;
const answerEls = document.querySelectorAll('.answer') ;
const questionEl = document.getElementById('question') ;

const a_text = document.getElementById('a_text') ;
const b_text = document.getElementById('b_text') ;
const c_text = document.getElementById('c_text') ;
const d_text = document.getElementById('d_text') ;

const submitBtn = document.getElementById('submit') ;

let currentQuiz = -1 ;
let score = 0 ;
let unAnswered = 0 ;
let first = 0 ;


function loadQuiz() 
{
    deselectAnswers() ;
    
    const currentQuizData = quizData[currentQuiz] ;
    
    questionEl.innerText = currentQuizData.question ;
    a_text.innerText = currentQuizData.a ;
    b_text.innerText = currentQuizData.b ;
    c_text.innerText = currentQuizData.c ;
    d_text.innerText = currentQuizData.d ;
}

function deselectAnswers() 
{
    answerEls.forEach(answerEl => answerEl.checked = false) ;
}

function getSelected() 
{
    let answer ;
    answerEls.forEach(answerEl => 
        {
            if(answerEl.checked) 
            {
                answer = answerEl.id ;
            }

            else
            {
                return null ;
            }
        }
    ) ;

    deselectAnswers() ;
    
    return answer ;
}

submitBtn.addEventListener('click', () => 
    {   
        const answer = getSelected() ;
        if(answer) 
        {
            if(answer === quizData[currentQuiz].correct) 
            {
                score++ ;
            }
            currentQuiz++ ;
        
            if (currentQuiz === quizData.length - 1)
            {
                loadQuiz() ;
                submitBtn.innerHTML = 'Submit' ;
            }
        
            else if(currentQuiz < quizData.length) 
            {
                submitBtn.innerHTML = 'Next &#8594;' ;
                loadQuiz() ;
            }
        
            else 
            {
                scoreGenerator() ;
            }

        }

        else
        {
            if (first === 0)
            {
                currentQuiz++ ;
                first++ ;
                submitBtn.innerHTML = 'Next &#8594;' ;
            }

            else
            {
                submitBtn.innerHTML = 'Submit' ;
                if(currentQuiz === quizData.length - 1)
                {
                    if(confirm("You haven't answered this question\nDo you want to submit without attending the last question ?"))
                    {    
                        unAnswered++ ;
                        scoreGenerator() ;
                    }
                }
                    
                else if (currentQuiz === quizData.length)    
                {    
                    scoreGenerator() ;
                }

                else
                {
                    submitBtn.innerHTML = 'Next &#8594;' ;
                    if(confirm("You haven't answered this question\nDo you want to go to the next question ?"))
                    {
                        unAnswered++ ;
                        currentQuiz++ ;
                        loadQuiz() ;
                    }
                }
            }
        }    

        btnToP() ;
    }
) ;


function scoreGenerator()
{
    quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly<br>No.of Unanswered : ${unAnswered}<br>Thanks for Coming !!!<br>Kindly inform to a volunteer</h2>
        ` ;
    return ;
}

document.addEventListener("keydown", function(event)
    {
        if(event.keyCode === 116) // 116 is F5 key, F5 for refresh is disabled
        {
            event.preventDefault() ;
            alert("Please Don't Refresh !!") ;
        }

        if(event.ctrlKey && event.keyCode === 82) // Ctrl + r for reload is also disabled
        {
            event.preventDefault() ;
            alert("Please Don't Refresh !!") ;
        }
    }
) ;


const startingMinutes = quizData.length ;
let time = startingMinutes * 60 ; // to convert to seconds


function btnToP()
{
    var button = document.getElementById('start') ;
    var pTag = document.createElement("p") ;
    
    pTag.setAttribute("id", "countdown") ;
    pTag.setAttribute("class", "timer") ;
    
    var text = document.createTextNode(`${quizData.length} : 00`) ;
    
    pTag.style.backgroundColor = "white" ;
    pTag.style.display = "inline-flex" ;
    pTag.style.fontSize = "25px" ;
    pTag.style.width = "150px" ;
    pTag.style.height = "35px" ;
    pTag.style.margin = "10" ;
    pTag.style.alignItems = "center" ;
    pTag.style.justifyContent = "center" ;
    pTag.style.borderRadius = "10px" ;
    pTag.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.25)" ;
    //pTag.style.animation = "rotateBorder 4s ease-in-out infinite" ;
    
    pTag.appendChild(text) ;
    button.parentNode.replaceChild(pTag,button) ;

    loadQuiz() ;
    btnClicked() ;
}


function btnClicked()
{
    var interval = setInterval(function()
        {
            const minutes = Math.floor(time / 60) ;
            let seconds = time % 60 ;
            const countDownEl = document.getElementById('countdown') ;
            var pTag = document.getElementById("countdown") ;
            
            if((minutes <= 29) && (currentQuiz !== quizData.length))
            {
                //pTag.style.animation = "rotateBorder 4s ease-in-out infinite" ;
                pTag.style.animation = "timer 2s linear infinite" ;
            }
            
            if(currentQuiz == quizData.length)
            {
                clearInterval(interval) ;
                pTag.style.animationPlayState = "paused" ;
            }
            
            if(time != 0)
            {
                seconds = (seconds < 10 && seconds >= 0) ? '0' + seconds : seconds ;
            }
    
            else
            {
                alert("Time's up !") ;
                clearInterval(interval) ;
            }

            if(minutes < 10)
            {
                countDownEl.innerHTML = '0' + `${minutes} : ${seconds}` ;
            }

            else
            {
                countDownEl.innerHTML = `${minutes} : ${seconds}` ;
            }

            time-- ;
            
        }, 1000) ;
}

// Arrow keys and enter key event listener

document.addEventListener('keydown', function(event)
    {
        if((event.keyCode == 49) || (event.keyCode == 97)) // number 1
        {
            document.getElementById("a").checked = true ;
        }
    }
) ;

document.addEventListener('keydown', function(event)
    {
        if((event.keyCode == 50) || (event.keyCode == 98)) // number 2
        {
            document.getElementById("b").checked = true ;
        }
    }
) ;

document.addEventListener('keydown', function(event)
    {
        if((event.keyCode == 51) || (event.keyCode == 99)) // number 3
        {
            document.getElementById("c").checked = true ;
        }
    }
) ;

document.addEventListener('keydown', function(event)
    {
        if((event.keyCode == 52) || (event.keyCode == 100)) // number 4
        {
            document.getElementById("d").checked = true ;
        }
    }
) ;

document.addEventListener('keydown', function(event)
    {
        if(event.keyCode == 13) // Enter key
        {
            submitBtn.click() ;
        }
    }
) ;