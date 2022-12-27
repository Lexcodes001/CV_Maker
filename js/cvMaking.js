let allInputs = document.getElementsByTagName('input'),
    allTextareas = document.getElementsByTagName('textarea'),
    eduSel = document.getElementById('degNo'),
    skillSel = document.getElementById('skillsNo'),
    refSel = document.getElementById('refNo'),
    exprSel = document.getElementById('exprNo'),
    expr1 = document.querySelector('.expr1'),
    expr2 = document.querySelector('.expr2'),
    expr3 = document.querySelector('.expr3'),
    degOne = document.querySelector('.deg1'),
    degTwo = document.querySelector('.deg2'),
    degThree = document.querySelector('.deg3'),
    skill1 = document.querySelector('.skill1'),
    skill2 = document.querySelector('.skill2'),
    skill3 = document.querySelector('.skill3'),
    skill4 = document.querySelector('.skill4'),
    skill5 = document.querySelector('.skill5'),
    skill6 = document.querySelector('.skill6'),
    skill7 = document.querySelector('.skill7'),
    skill8 = document.querySelector('.skill8'),
    ref1 = document.querySelector('.ref1'),
    ref2 = document.querySelector('.ref2'),
    ref3 = document.querySelector('.ref3'),
    cvTitle = document.querySelector('.top-box h2'),
    genCvBtn = document.querySelector(".bttn"),
    cvContainer = document.querySelector('.cv-cont');

const contactItems = document.querySelectorAll('.contact .item'),
    edu = document.querySelector('.edu'),
    eduBox = document.querySelectorAll('.edu .box'),
    expr = document.querySelector('.expr'),
    exprBox = document.querySelectorAll('.expr .box'),
    skills = document.querySelector('.skills'),
    skillBox = document.querySelectorAll('.skills .box'),
    ref = document.querySelector('.ref'),
    refBox = document.querySelectorAll('.ref .box');

//allInputs.setAttribute('required');

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup', function() {
        if (allInputs[i].value == '' || allInputs[i].value == null) {
            allInputs[i].nextElementSibling.style.display = 'block';
            allInputs[i].nextElementSibling.innerHTML = 'Please fill out this field🥺';
            genCvBtn.style.pointerEvents = 'none';
            genCvBtn.style.opacity = '0.5';
        } else{
            allInputs[i].nextElementSibling.style.display = 'none';
            allInputs[i].nextElementSibling.innerHTML = '';
            genCvBtn.style.pointerEvents = 'auto';
            genCvBtn.style.opacity = '1';
        }
    });
    
}

for (let i = 0; i < allTextareas.length; i++) {
    allTextareas[i].addEventListener('keyup', function() {
        if (allTextareas[i].value == '' || allTextareas[i].value == null) {
            allTextareas[i].nextElementSibling.style.display = 'block';
            allTextareas[i].nextElementSibling.innerHTML = 'Please fill out this field🥺';
            genCvBtn.style.pointerEvents = 'none';
            genCvBtn.style.opacity = '0.5';
        } else{
            allTextareas[i].nextElementSibling.style.display = 'none';
            allTextareas[i].nextElementSibling.innerHTML = '';
            genCvBtn.style.pointerEvents = 'auto';
            genCvBtn.style.opacity = '1';
        }
    });
    
}

exprSel.addEventListener('change', () => {
    if (exprSel.value === '1') {
        expr1.style.display = 'block';
        expr2.style.display = 'none';
        expr3.style.display = 'none';
    } else if (exprSel.value === '2') {
        expr1.style.display = 'block';
        expr2.style.display = 'block';
        expr3.style.display = 'none';
    } else if (exprSel.value === '3') {
        expr1.style.display = 'block';
        expr2.style.display = 'block';
        expr3.style.display = 'block';
    } else if (exprSel.value === '') {
        expr1.style.display = 'none';
        expr2.style.display = 'none';
        expr3.style.display = 'none';
    } else {
        return;
    }
});

eduSel.addEventListener('change', () => {
    if (eduSel.value === '1') {
        degOne.style.display = 'block';
        degTwo.style.display = 'none';
        degThree.style.display = 'none';
    } else if (eduSel.value === '2') {
        degOne.style.display = 'block';
        degTwo.style.display = 'block';
        degThree.style.display = 'none';
    } else if (eduSel.value === '3') {
        degOne.style.display = 'block';
        degTwo.style.display = 'block';
        degThree.style.display = 'block';
    } else if (eduSel.value === '') {
        degOne.style.display = 'none';
        degTwo.style.display = 'none';
        degThree.style.display = 'none';
    } else{
        return;
    }
});

skillSel.addEventListener('change', () => {
    if (skillSel.value === '1') {
        skill1.style.display = 'block';
        skill2.style.display = 'none';
        skill3.style.display = 'none';
        skill4.style.display = 'none';
        skill5.style.display = 'none';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '2') {
        skill1.style.display = 'flex';
        skill2.style.display = 'flex';
        skill3.style.display = 'none';
        skill4.style.display = 'none';
        skill5.style.display = 'none';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '3') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'none';
        skill5.style.display = 'none';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '4') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'block';
        skill5.style.display = 'none';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '5') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'block';
        skill5.style.display = 'block';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '6') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'block';
        skill5.style.display = 'block';
        skill6.style.display = 'block';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else if (skillSel.value === '7') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'block';
        skill5.style.display = 'block';
        skill6.style.display = 'block';
        skill7.style.display = 'block';
        skill8.style.display = 'none';
    } else if (skillSel.value === '8') {
        skill1.style.display = 'block';
        skill2.style.display = 'block';
        skill3.style.display = 'block';
        skill4.style.display = 'block';
        skill5.style.display = 'block';
        skill6.style.display = 'block';
        skill7.style.display = 'block';
        skill8.style.display = 'block';
    } else if (skillSel.value === '') {
        skill1.style.display = 'none';
        skill2.style.display = 'none';
        skill3.style.display = 'none';
        skill4.style.display = 'none';
        skill5.style.display = 'none';
        skill6.style.display = 'none';
        skill7.style.display = 'none';
        skill8.style.display = 'none';
    } else{
        return;
    }
});

refSel.addEventListener('change', () => {
    if (refSel.value === '1') {
        ref1.style.display = 'block';
        ref2.style.display = 'none';
        ref3.style.display = 'none';
    } else if (refSel.value === '2') {
        ref1.style.display = 'block';
        ref2.style.display = 'block';
        ref3.style.display = 'none';
    } else if (refSel.value === '3') {
        ref1.style.display = 'block';
        ref2.style.display = 'block';
        ref3.style.display = 'block';
    } else if (refSel.value === '') {
        ref1.style.display = 'none';
        ref2.style.display = 'none';
        ref3.style.display = 'none';
    } else{
        return;
    }
});

var popupBox = document.querySelector(".popup-box"),
previewBox = document.querySelector('.popup-preview-box'),
prevPage = document.querySelector('.top-box i'),
titleTag = popupBox.querySelector("#title"),
firstName = popupBox.querySelector('#firstName'),
lastName = popupBox.querySelector('#lastName'),
profession = popupBox.querySelector('#profession'),
about = popupBox.querySelector('#about'),
address = popupBox.querySelector('#address'),
number = popupBox.querySelector('#number'),
mail = popupBox.querySelector('#mail'),
website = popupBox.querySelector('#website'),
linkedIn = popupBox.querySelector('#linkedIn'),
yearRange1 = popupBox.querySelector('#yearRange1'),
job1 = popupBox.querySelector('#job1'),
abtJob1 = popupBox.querySelector('#abtJob1'),
yearRange2 = popupBox.querySelector('#yearRange2'),
job2 = popupBox.querySelector('#job2'),
abtJob2 = popupBox.querySelector('#abtJob2'),
yearRange3 = popupBox.querySelector('#yearRange3'),
job3 = popupBox.querySelector('#job3'),
abtJob3 = popupBox.querySelector('#abtJob3'),
timeRange1 = popupBox.querySelector('#timeRange1'),
degNdCourse1 = popupBox.querySelector('#degNdCourse1'),
inst1 = popupBox.querySelector('#inst1'),
timeRange2 = popupBox.querySelector('#timeRange2'),
degNdCourse2 = popupBox.querySelector('#degNdCourse2'),
inst2 = popupBox.querySelector('#inst2'),
timeRange3 = popupBox.querySelector('#timeRange3'),
degNdCourse3 = popupBox.querySelector('#degNdCourse3'),
inst3 = popupBox.querySelector('#inst3'),
skillName1 = popupBox.querySelector('#skillName1'),
skillRate1 = popupBox.querySelector('#skillRate1'),
skillName2 = popupBox.querySelector('#skillName2'),
skillRate2 = popupBox.querySelector('#skillRate2'),
skillName3 = popupBox.querySelector('#skillName3'),
skillRate3 = popupBox.querySelector('#skillRate3'),
skillName4 = popupBox.querySelector('#skillName4'),
skillRate4 = popupBox.querySelector('#skillRate4'),
skillName5 = popupBox.querySelector('#skillName5'),
skillRate5 = popupBox.querySelector('#skillRate5'),
skillName6 = popupBox.querySelector('#skillName6'),
skillRate6 = popupBox.querySelector('#skillRate6'),
skillName7 = popupBox.querySelector('#skillName7'),
skillRate7 = popupBox.querySelector('#skillRate7'),
skillName8 = popupBox.querySelector('#skillName8'),
skillRate8 = popupBox.querySelector('#skillRate8'),
refName1 = popupBox.querySelector('#refName1'),
refPost1 = popupBox.querySelector('#refPost1'),
refTel1 = popupBox.querySelector('#refTel1'),
refMail1 = popupBox.querySelector('#refMail1'),
refName2 = popupBox.querySelector('#refName2'),
refPost2 = popupBox.querySelector('#refPost2'),
refTel2 = popupBox.querySelector('#refTel2'),
refMail2 = popupBox.querySelector('#refMail2'),
refName3 = popupBox.querySelector('#refName3'),
refPost3 = popupBox.querySelector('#refPost3'),
refTel3 = popupBox.querySelector('#refTel3'),
refMail3 = popupBox.querySelector('#refMail3'),
imgDownloadMenu = document.querySelector('.btn-menu-img'),
pdfDownloadMenu = document.querySelector('.btn-menu-pdf'),
btnKey = document.querySelector('.btn-key'),
btnKeyIcon = document.querySelector('.btn-key i');


prevPage.addEventListener("click", () => {
    window.location.reload();
});

genCvBtn.value = 'Generate CV';

genCvBtn.addEventListener("click", e => {
    e.preventDefault();
    
    previewBox.classList.add('disp');
    popupBox.classList.add('hide');
    titleTag = titleTag.value.trim();
    firstName = firstName.value.trim();
    lastName = lastName.value.trim().toUpperCase();
    profession = profession.value.trim().toUpperCase();
    about = about.value.trim();
    address = address.value.trim();
    number = number.value.trim();
    mail = mail.value.trim();
    website = website.value.trim();
    linkedIn = linkedIn.value.trim();
    yearRange1 = yearRange1.value.trim();
    job1 = job1.value.trim();
    abtJob1 = abtJob1.value.trim();
    yearRange2 = yearRange2.value.trim();
    job2 = job2.value.trim();
    abtJob2 = abtJob2.value.trim();
    yearRange3 = yearRange3.value.trim();
    job3 = job3.value.trim();
    abtJob3 = abtJob3.value.trim();
    timeRange1 = timeRange1.value.trim();
    degNdCourse1 = degNdCourse1.value.trim();
    inst1 = inst1.value.trim();
    timeRange2 = timeRange2.value.trim();
    degNdCourse2 = degNdCourse2.value.trim();
    inst2 = inst2.value.trim();
    timeRange3 = timeRange3.value.trim();
    degNdCourse3 = degNdCourse3.value.trim();
    inst3 = inst3.value.trim();
    skillName1 = skillName1.value.trim().toUpperCase();
    skillRate1 = skillRate1.value.trim();
    skillName2 = skillName2.value.trim().toUpperCase();
    skillRate2 = skillRate2.value.trim();
    skillName3 = skillName3.value.trim().toUpperCase();
    skillRate3 = skillRate3.value.trim();
    skillName4 = skillName4.value.trim().toUpperCase();
    skillRate4 = skillRate4.value.trim();
    skillName5 = skillName5.value.trim().toUpperCase();
    skillRate5 = skillRate5.value.trim();
    skillName6 = skillName6.value.trim().toUpperCase();
    skillRate6 = skillRate6.value.trim();
    skillName7 = skillName7.value.trim().toUpperCase();
    skillRate7 = skillRate7.value.trim();
    skillName8 = skillName8.value.trim().toUpperCase();
    skillRate8 = skillRate8.value.trim();
    refName1 = refName1.value.trim();
    refPost1 = refPost1.value.trim();
    refTel1 = refTel1.value.trim();
    refMail1 = refMail1.value.trim();
    refName2 = refName2.value.trim();
    refPost2 = refPost2.value.trim();
    refTel2 = refTel2.value.trim();
    refMail2 = refMail2.value.trim();
    refName3 = refName3.value.trim();
    refPost3 = refPost3.value.trim();
    refTel3 = refTel3.value.trim();
    refMail3 = refMail3.value.trim();
    
    let cV = `<div class="cv-box flex column">
        <div class="top flex">
            <div class="left flex column">
                <h1 class="name">${firstName.toUpperCase()}  ${lastName}<h1>
                <p>${profession}</p>
            </div>
            <div class="right flex column">
                <p class="addr bold">${address}</p>
                <div class="contact flex column">
                    <div class="flex item">
                        <img class="cv-img" src="images/phone.png" alt="." />
                        <p>${number}</p>
                    </div>
                    <div class="flex item">
                        <img class="cv-img" src="images/envelope-alt.png" alt="." />
                        <p>${mail}</p>
                    </div>
                    <div class="flex item">
                        <img class="cv-img" src="images/link-alt.png" alt="." />
                        <p>${website}</p>
                    </div>
                    <div class="flex item">
                        <img class="cv-img" src="images/linkedin-alt.png" alt="." />
                        <p>${linkedIn}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content">
            <div class="sect">
                <div class="header">
                    <h4>PROFESSIONAL STATEMENT</h4>
                </div>
                <div class="abt flex">
                    <p>${about}</p>
                </div>
            </div>
            
            <div class="sect">
                <div class="header">
                    <h4>WORK EXPERIENCE</h4>
                </div>
                <div class="expr column">
                    <div class="box">
                        <div class="details">
                            <p class="bold">${job1}</p>
                            <p class="bold">${yearRange1}</p>
                        </div>
                        <p>${abtJob1}</p>
                    </div>
                    
                    <div class="box">
                        <div class="details">
                            <p class="bold">${job2}</p>
                            <p class="bold">${yearRange2}</p>
                        </div>
                        <p>${abtJob2}</p>
                    </div>
                    
                    <div class="box">
                        <div class="details">
                            <p class="bold">${job3}</p>
                            <p class="bold">${yearRange3}</p>
                        </div>
                        <p>${abtJob3}</p>
                    </div>
                </div>
            </div>
            
            <div class="sect">
                <div class="header">
                    <h4>EDUCATION</h4>
                </div>
                <div class="edu column">
                    <div class="box">
                        <div class="details">
                            <p class="bold">${inst1}</p>
                            <p class="bold">${timeRange1}</p>
                        </div>
                        <p>${degNdCourse1}</p>
                    </div>
                
                    <div class="box">
                        <div class="details">
                            <p class="bold">${inst2}</p>
                            <p class="bold">${timeRange2}</p>
                        </div>
                        <p>${degNdCourse2}</p>
                    </div>
                
                    <div class="box">
                        <div class="details">
                            <p class="bold">${inst3}</p>
                            <p class="bold">${timeRange3}</p>
                        </div>
                        <p>${degNdCourse3}</p>
                    </div>
                </div>
            </div>
            
            <div class="sect">
                <div class="header">
                    <h4>EXPERTISE</h4>
                </div>
                <div class="skills">
                    <div class="box">
                        <p class="bold">${skillName1}</p>
                        <div class="cont"><div class="level" style="width:${skillRate1}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName2}</p>
                        <div class="cont"><div class="level" style="width:${skillRate2}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName3}</p>
                        <div class="cont"><div class="level" style="width:${skillRate3}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName4}</p>
                        <div class="cont"><div class="level" style="width:${skillRate4}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName5}</p>
                        <div class="cont"><div class="level" style="width:${skillRate5}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName6}</p>
                        <div class="cont"><div class="level" style="width:${skillRate6}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName7}</p>
                        <div class="cont"><div class="level" style="width:${skillRate7}%;"></div></div>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${skillName8}</p>
                        <div class="cont"><div class="level" style="width:${skillRate8}%;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="sect">
                <div class="header">
                    <h4>REFERENCES</h4>
                </div>
                <div class="ref">
                    <div class="box">
                        <p class="bold">${refName1}</p>
                        <p>${refPost1}</p>
                        <p><span class="bold">T</span>${refTel1}</p>
                        <p><span class="bold">E</span>${refMail1}</p>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${refName2}</p>
                        <p>${refPost2}</p>
                        <p><span class="bold">T</span>${refTel2}</p>
                        <p><span class="bold">E</span>${refMail2}</p>
                    </div>
                    
                    <div class="box">
                        <p class="bold">${refName3}</p>
                        <p>${refPost3}</p>
                        <p><span class="bold">T</span>${refTel3}</p>
                        <p><span class="bold">E</span>${refMail3}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    if (titleTag == '') {
        if(firstName == ''){
            cvTitle.innerHTML = 'My Resume';
        } else{
            cvTitle.innerHTML = `${firstName}'s Resume`;
        }
    } else{
        cvTitle.innerHTML = titleTag;
    }
    
    cvContainer.innerHTML = cV;

    function closeBtns() {
        btnKey.click();
    }
    
    function showBtns() {
        btnKey.click();
        setTimeout(closeBtns, 3000);
    }
    
    setTimeout(showBtns, 2000);

        
        if (website === '') {
            contactItems[2].style.display = 'none';
        }
        
        if (linkedIn === '') {
            contactItems[3].style.display = 'none';
            alert('SUCCESS!');
        }
        
        if (exprSel.value === '1') {
            exprBox[0].style.display = 'flex';
            exprBox[1].style.display = 'none';
            exprBox[2].style.display = 'none';
        } else if (exprSel.value === '2') {
            exprBox[0].style.display = 'flex';
            exprBox[1].style.display = 'flex';
            exprBox[2].style.display = 'none';
        } else if (exprSel.value === '3') {
            exprBox.style.display = 'flex';
        } else if (exprSel.value === '') {
            expr.style.display = 'none';
        } else {
            return;
        }
        
        if (eduSel.value === '1') {
            eduBox[0].style.display = 'flex';
            eduBox[1].style.display = 'none';
            eduBox[2].style.display = 'none';
        } else if (eduSel.value === '2') {
            eduBox[0].style.display = 'flex';
            eduBox[1].style.display = 'flex';
            eduBox[2].style.display = 'none';
        } else if (eduSel.value === '3') {
            eduBox.style.display = 'flex';
        } else if (eduSel.value === '') {
            edu.style.display = 'none';
        } else{
            return;
        }
        
        if (refSel.value === '1') {
            refBox[0].style.display = 'flex';
            refBox[1].style.display = 'none';
            refBox[2].style.display = 'none';
        } else if (refSel.value === '2') {
            refBox[0].style.display = 'flex';
            refBox[1].style.display = 'flex';
            refBox[2].style.display = 'none';
        } else if (refSel.value === '3') {
            refBox[0].style.display = 'flex';
            refBox[1].style.display = 'flex';
            refBox[2].style.display = 'flex';
        } else if (refSel.value === '') {
            ref.style.display = 'none';
        } else {
            return;
        }
        
        if (skillSel.value === '1') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'none';
            skillBox[2].style.display = 'none';
            skillBox[3].style.display = 'none';
            skillBox[4].style.display = 'none';
            skillBox[5].style.display = 'none';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
            
        } else if (skillSel.value === '2') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'none';
            skillBox[3].style.display = 'none';
            skillBox[4].style.display = 'none';
            skillBox[5].style.display = 'none';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
        } else if (skillSel.value === '3') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'flex';
            skillBox[3].style.display = 'none';
            skillBox[4].style.display = 'none';
            skillBox[5].style.display = 'none';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
        } else if (skillSel.value === '4') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'flex';
            skillBox[3].style.display = 'flex';
            skillBox[4].style.display = 'none';
            skillBox[5].style.display = 'none';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
        } else if (skillSel.value === '5') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'flex';
            skillBox[3].style.display = 'flex';
            skillBox[4].style.display = 'flex';
            skillBox[5].style.display = 'none';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
        } else if (skillSel.value === '6') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'flex';
            skillBox[3].style.display = 'flex';
            skillBox[4].style.display = 'flex';
            skillBox[5].style.display = 'flex';
            skillBox[6].style.display = 'none';
            skillBox[7].style.display = 'none';
        } else if (skillSel.value === '7') {
            skillBox[0].style.display = 'flex';
            skillBox[1].style.display = 'flex';
            skillBox[2].style.display = 'flex';
            skillBox[3].style.display = 'flex';
            skillBox[4].style.display = 'flex';
            skillBox[5].style.display = 'flex';
            skillBox[6].style.display = 'flex';
            skillBox[7].style.display = 'none';
            
        } else if (skillSel.value === '8') {
            skillBox.style.display = 'flex';
        } else if (skillSel.value === '') {
            skills.style.display = 'none';
        } else{
            return;
        }
});


let btnBox = document.querySelectorAll('.btn-box button');

let resume = document.querySelector(".cv-box");

let fileName = 'my_resume', quality = 10, format = "png";

btnKey.addEventListener('click', ()=>{
    btnKeyIcon.classList.toggle('uil-times');
    btnBox[0].classList.toggle('disp');
    btnBox[1].classList.toggle('disp');
});

function downloadImg(){
	html2canvas(cvContainer, {scale: quality}).then(
		function (canvas){
			let img = new Image();
			img.src = canvas.toDataURL();
				
			let a = document.createElement("a");
			a.href = img.src;
			a.download = `${fileName}.${format}`;
			a.click();
		}
	);
}

function downloadPdf() {
    html2pdf().from(cvContainer).save();
}


btnBox[0].addEventListener('click', ()=>{
    downloadImg();
});

btnBox[1].addEventListener('click', ()=>{
    downloadPdf();
});


/*const qualityBtn = document.querySelectorAll(".quality button");
const formatBtn = document.querySelectorAll(".format button");

qualityBtn.forEach(btn => {
    btn.addEventListener("click", function() { quality = btn.innerHTML; 
        btn.classList.toggle('click');
    });
});
  
formatBtn.forEach(btn => {
    btn.addEventListener("click", function() { format = btn.innerHTML; 
        btn.classList.toggle('click');
    });
});
*/

