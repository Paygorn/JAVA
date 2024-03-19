            let infoPazient=["Иванов","иван","Иванович", 15, "Мая", 1974, "м"];
            console.log(infoPazient);
            console.log(infoPazient[0]);
            console.log(infoPazient[5]);
            /*
            let lastname;
            lastname=prompt ("Введите имя пациента",lastname);
            console.log(lastname);
            infoPazient[0]=lastname;
            console.log(infoPazient);
            */
            var person = {
     "SNILS 1": ["Иванов","иван","Иванович", 15, "Мая", 1974, "м", "исполнено"],
     "SNILS 2": ["Куст", "Павел", "Павлович", 20, "мая", 1980, "м", "медотвод"],
     "SNILS 3": ["Поткина", "Ярослава", "Борисовна", 1, "июня", 1975, "ж", "назначено"],
    };
           /* console.log(person);
            SNILS4="SNILS 4"
            let lastname;
            lastname=prompt ("Введите имя пациента",lastname);
            //console.log(lastname);
            infoPazient[0]=lastname;
            console.log(infoPazient);
            let firstname;
            firstname=promt("Введите имя пациента", firstname);
            //console.log(lastname);
            infoPazient[1]=firstname;
            console.log(infoPazient);
            let middlename;
            middlename=prompt("Введите отчество пациента",middlename);
            //cohsole.log(lastname);
            infoPazient[2]=middlename;
            console.log(infoPazient);
            let date;
            date=prompt("Введите дату рождения  пациента",date);
            //cohsole.log(lastname);
            infoPazient[3]=date;
            console.log(infoPazient);
            person.SNILS4=infoPazient;
            console.log(person); */
            //Получаем информацию о пациенте по СНИЛС
            let SNILS;
            var firsfunction = function (person,SNILS) {
                SNILS=prompt("Введите SNILS пациента", SNILS);
                infoname=person[SNILS];
                console.log(infoname);
                alert("Информация о пациенте" + infoname);
                statusPriv = person[SNILS][7];
                console.log(statusPriv);
            };
           /*let phase;
           phase=prompt("Введите действие или медотвод или назначено или исполнено",phase);
           infoname.push(phase);
           console.log(infoname);
           person[SNILS]=infoname;
           console.log(person);*/
           // Извлекаем информацию о текущем статусе привики
           var SecondFunction = function (statusPriv, infoname) {

                //statusPriv = person[SNILS][7];

                //console.log(statusPriv);
                //Проверяем возможноссть изменения статуса 
                if (statusPriv === "исполнено") {
                     alert("Отказано в привикемпациенту" + infoname);
                } else if (statusPriv === "медоотвод") {
                      alert("Отказано в прививке пациенту" + infoname);
                } else {
                     alert("Исполнить прививку пциенту" + infoname);
                }
           }
            forSecond = firsfunction(person, SNILS);
            SecondFunction(statusPriv, infoname);
            
            //Предлагаем закончить или продолжить работу в этом окне
            while (confirm("Продолжить провеку прививочного статуса?")) {
                forSecond = firsfunction(person, SNILS);
                SecondFunction(statusPriv, infoname);
            };

            /*var prolongation = confirm("Продолжить провреку прививочного статуса?");
            if (prolongation) {
                console.log("Введите СНИЛС");
            } else {}*/
                console.log("Сеанс проверки прививочного статуса закончен");
            
            

         
