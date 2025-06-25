export const quizContracteSpeciale = {
  quizTitle: "DREPT CIVIL CONTRACTE SPECIALE",
  quizSynopsis: "Întrebări din drept civil - contracte speciale.",
  nrOfQuestions: 9,
  questions: [
    {
      id: 201,
      question: "Are calitate procesuală activă în cazul acţiunii în revendicare:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) proprietarul neposesor",
        "b) uzufructuarul",
        "c) posesorul de bună-credinţă"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Corect! Proprietarul neposesor are calitate procesuală activă.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este a).",
      point: 1
    },
    {
      id: 202,
      question: "Poate avea calitate procesuală pasivă în cazul acţiunii în revendicare:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) proprietarul neposesor",
        "b) uzufructuarul",
        "c) posesorul de bună-credinţă"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Corect! Posesorul de bună-credinţă poate avea calitate procesuală pasivă.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este c).",
      point: 1
    },
    {
      id: 203,
      question: "În cazul imobilelor înscrise în cartea funciară, proba dreptului de proprietate se face cu:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) contractul de vânzare în formă autentică",
        "b) certificatul de moştenitor",
        "c) extrasul de carte funciară"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Corect! Extrasul de carte funciară face dovada dreptului de proprietate.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este c).",
      point: 1
    },
    {
      id: 204,
      question: "Acțiunea în revendicare prezintă următoarele caractere juridice:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) este o acţiune personală",
        "b) este o acţiune petitorie",
        "c) este o acţiune posesorie"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Corect! Este o acțiune petitorie.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este b).",
      point: 1
    },
    {
      id: 205,
      question: "În cazul admiterii acţiunii în revendicare, pârâtul poate fi obligat:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) la restituirea bunului sau la restituirea productelor acestuia",
        "b) la restituirea bunului şi la restituirea productelor acestuia",
        "c) la restituirea cheltuielilor necesare efectuate în legătură cu bunul"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Corect! Pârâtul poate fi obligat la restituirea bunului și a produselor acestuia.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este b).",
      point: 1
    },
    {
      id: 206,
      question: "Este o modalitate a dreptului de proprietate:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) proprietatea individuală",
        "b) proprietatea rezolubilă",
        "c) proprietatea imobiliară"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Corect! Proprietatea rezolubilă este o modalitate.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este b).",
      point: 1
    },
    {
      id: 207,
      question: "Coproprietatea pe cote-părți dă dreptul fiecărui coproprietar:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) asupra unei părți materiale din bun, proporțională cu cota sa",
        "b) asupra unei cote-părți ideale din bun",
        "c) asupra întregului bun, o perioadă de timp proporțională cu cota sa"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Corect! Fiecare coproprietar are dreptul asupra unei cote-părți ideale din bun.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este b).",
      point: 1
    },
    {
      id: 208,
      question: "Fiecare dintre coproprietari are dreptul de a folosi bunul comun:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) în măsura în care nu schimbă destinaţia şi nu aduce atingere drepturilor celorlalți coproprietari",
        "b) în măsura în care ceilalți coproprietari i-o permit",
        "c) după cum crede de cuviinţă, cu condiția să nu încalce ordinea publică şi bunele moravuri"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Corect! Folosirea este permisă dacă nu se aduce atingere drepturilor celorlalți.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este a).",
      point: 1
    },
    {
      id: 209,
      question: "Fiecare coproprietar poate să facă acte de conservare cu privire la bunul comun:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "a) cu acordul majorității coproprietarilor",
        "b) cu acordul tuturor coproprietarilor",
        "c) fără acordul celorlalți proprietari"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Corect! Actele de conservare pot fi făcute fără acordul celorlalți.",
      messageForIncorrectAnswer: "Greșit. Răspunsul corect este c).",
      point: 1
    }
  ]
};

export const quizContracteSpecialeShort = {
  ...quizContracteSpeciale,
  nrOfQuestions: 20,
  questions: quizContracteSpeciale.questions.slice(0, 20),
};