if (optionsFirstSelection === 'option_a') {
    optionAText.textContent = iKnowTheNameOptionA;
    optionARadioCheck.setAttribute('class', iKnowTheNameOptionA);
    function serchSecondList() {
        const optionsSecondList = [`option_b`, `option_c`, `option_d`];
        const optionsSecondLength = optionsSecondList.length;

        const optionsRandomOptionSecondNumber = Math.floor(Math.random() * optionsSecondLength);
        const optionsSecondSelection = optionsSecondList[optionsRandomOptionSecondNumber];
        console.log(optionsSecondSelection);

        if (optionsSecondSelection === 'option_b') {
            optionBText.textContent = iKnowTheNameOptionB;

            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionB);

            const optionsThirthList = [`option_c`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);

                optionDRadioCheck.setAttribute('class', iKnowTheNameOptionD);
                optionDText.textContent = iKnowTheNameOptionD;
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionD);

                optionDText.textContent = iKnowTheNameOptionC;
                optionDRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            }
        } else if (optionsSecondSelection === 'option_c') {
            optionBText.textContent = iKnowTheNameOptionC;

            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            const optionsThirthList = [`option_b`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionD);
            }
        } else if (optionsSecondSelection === 'option_d') {
            optionBText.textContent = iKnowTheNameOptionD;

            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionD);
            const optionsThirthList = [`option_b`, `option_c`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            } else if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            }
        }
    }

    serchSecondList();
} else if (optionsFirstSelection === 'option_b') {
    optionAText.textContent = iKnowTheNameOptionB;

    optionARadioCheck.setAttribute('class', iKnowTheNameOptionB);

    function serchSecondList() {
        const optionsSecondList = [`option_a`, `option_c`, `option_d`];
        const optionsSecondLength = optionsSecondList.length;

        const optionsRandomOptionSecondNumber = Math.floor(Math.random() * optionsSecondLength);
        const optionsSecondSelection = optionsSecondList[optionsRandomOptionSecondNumber];
        console.log(optionsSecondSelection);
        optionBText.textContent = optionsSecondSelection;

        if (optionsSecondSelection === 'option_a') {
            optionBText.textContent = iKnowTheNameOptionA;

            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            const optionsThirthList = [`option_c`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;

                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionD);
            }
        } else if (optionsSecondSelection === 'option_c') {
            optionBText.textContent = iKnowTheNameOptionC;

            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            const optionsThirthList = [`option_a`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionD);
            }
        } else if (optionsSecondSelection === 'option_d') {
            optionBText.textContent = iKnowTheNameOptionD;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionD);

            const optionsThirthList = [`option_a`, `option_c`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            }
        }
    }
    serchSecondList();
} else if (optionsFirstSelection === 'option_c') {
    optionAText.textContent = iKnowTheNameOptionC;

    optionARadioCheck.setAttribute('class', iKnowTheNameOptionC);
    function serchSecondList() {
        const optionsSecondList = [`option_a`, `option_b`, `option_d`];
        const optionsSecondLength = optionsSecondList.length;

        const optionsRandomOptionSecondNumber = Math.floor(Math.random() * optionsSecondLength);
        const optionsSecondSelection = optionsSecondList[optionsRandomOptionSecondNumber];
        console.log(optionsSecondSelection);
        optionBText.textContent = optionsSecondSelection;

        if (optionsSecondSelection === 'option_a') {
            optionBText.textContent = iKnowTheNameOptionA;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionA);

            const optionsThirthList = [`option_b`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionD);
            }
        } else if (optionsSecondSelection === 'option_b') {
            optionBText.textContent = iKnowTheNameOptionB;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionB);

            const optionsThirthList = [`option_a`, `option_d`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_d') {
                optionCText.textContent = iKnowTheNameOptionD;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            }
        } else if (optionsSecondSelection === 'option_d') {
            optionBText.textContent = iKnowTheNameOptionD;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionD);

            const optionsThirthList = [`option_a`, `option_b`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            }
        }
    }

    serchSecondList();
} else if (optionsFirstSelection === 'option_d') {
    optionAText.textContent = iKnowTheNameOptionD;

    optionARadioCheck.setAttribute('class', iKnowTheNameOptionD);
    function serchSecondList() {
        const optionsSecondList = [`option_a`, `option_b`, `option_c`];
        const optionsSecondLength = optionsSecondList.length;

        const optionsRandomOptionSecondNumber = Math.floor(Math.random() * optionsSecondLength);
        const optionsSecondSelection = optionsSecondList[optionsRandomOptionSecondNumber];
        console.log(optionsSecondSelection);
        optionBText.textContent = optionsSecondSelection;

        if (optionsSecondSelection === 'option_a') {
            optionBText.textContent = iKnowTheNameOptionA;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionA);

            const optionsThirthList = [`option_b`, `option_c`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            } else if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            }
        } else if (optionsSecondSelection === 'option_b') {
            optionBText.textContent = iKnowTheNameOptionB;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionB);

            const optionsThirthList = [`option_a`, `option_c`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_c') {
                optionCText.textContent = iKnowTheNameOptionC;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionC);
            }
        } else if (optionsSecondSelection === 'option_c') {
            optionBText.textContent = iKnowTheNameOptionC;
            optionBRadioCheck.setAttribute('class', iKnowTheNameOptionC);

            const optionsThirthList = [`option_a`, `option_b`];
            const optionsThirthListLength = optionsThirthList.length;
            const optionsThirthListRandomNumber = Math.floor(
                Math.random() * optionsThirthListLength
            );
            const optionsThirthSelection = optionsThirthList[optionsThirthListRandomNumber];
            console.log(optionsThirthSelection);
            if (optionsThirthSelection === 'option_a') {
                optionCText.textContent = iKnowTheNameOptionA;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionA);
            } else if (optionsThirthSelection === 'option_b') {
                optionCText.textContent = iKnowTheNameOptionB;
                optionCRadioCheck.setAttribute('class', iKnowTheNameOptionB);
            }
        }
    }

    serchSecondList();
} else {
    console.loge('error no se por que');
}
