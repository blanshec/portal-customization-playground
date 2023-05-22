window.addEventListener('load', function () {
   //LOCAL STORAGE COLLECT
   const localStorage = window.localStorage;
   const currentUserName = localStorage.getItem('userName', '{{current_user.phone}}').replace("&#39;","'")
   const unparsedEmail = localStorage.getItem('userEmail', '{{current_user.email}}');
   const currentUserJobTitle = localStorage.getItem('userJobTitle', '{{current_user.email}}');
   let currentUserPhone;
   //LOCAL STORAGE COLLECT END

   const test = false;

   const regexEmail = /\@(.*)/i;
   const currentUserEmail = unparsedEmail.replace(regexEmail, '@squad.ua');

   const serviceItems = ['31', '33', '53', '96', '110', '116', '120', '169', '165', '170', '171', '174', '183', '186', '194', '195', '201'];
   const elementNames = {
      '31': null,
      '33': {
         dropdown: 'requested_item_values[33][requested_item_value_attributes][cf_dropdown_160198270408587_63350]',
         checkbox: 'requested_item_values[33][requested_item_value_attributes][cf_bamboohr_63350]',
         inputName: 'requested_item_values[33][requested_item_value_attributes][cf_text_160198270403175_63350]',
         inputPhone: 'requested_item_values[33][requested_item_value_attributes][cf_text_160198270408389_63350]',
         inputCity: 'requested_item_values[33][requested_item_value_attributes][cf_text_160198270408483_63350]',
         inputStreet: 'requested_item_values[33][requested_item_value_attributes][cf_text_160198270408495_63350]',
         inputHouse: 'requested_item_values[33][requested_item_value_attributes][cf_text_160216200880737_63350]',
         inputFlat: 'requested_item_values[33][requested_item_value_attributes][cf_text_160216200880747_63350]'
      },
      '53': {
         dropdown: 'requested_item_values[53][requested_item_value_attributes][cf_delivery_270753]',
         checkbox: 'requested_item_values[53][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[53][requested_item_value_attributes][cf_receiver_270753]',
         inputPhone: 'requested_item_values[53][requested_item_value_attributes][cf_phone_number_270753]',
         inputCity: 'requested_item_values[53][requested_item_value_attributes][cf_city_270753]',
         inputStreet: 'requested_item_values[53][requested_item_value_attributes][cf_street_name_270753]',
         inputHouse: 'requested_item_values[53][requested_item_value_attributes][cf_building_270753]',
         inputFlat: 'requested_item_values[53][requested_item_value_attributes][cf_apartment_270753]'
      },
      '96': {
         dropdown: 'requested_item_values[96][requested_item_value_attributes][cf_delivery_for_wfh_period_270753]',
         checkbox: 'requested_item_values[96][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[96][requested_item_value_attributes][cf_receiver_270753]',
         inputPhone: 'requested_item_values[96][requested_item_value_attributes][cf_phone_number_270753]',
         inputCity: 'requested_item_values[96][requested_item_value_attributes][cf_city_270753]',
         inputStreet: 'requested_item_values[96][requested_item_value_attributes][cf_street_name_270753]',
         inputHouse: 'requested_item_values[96][requested_item_value_attributes][cf_building_270753]',
         inputFlat: 'requested_item_values[96][requested_item_value_attributes][cf_apartment_270753]'
      },
      '110': {
         dropdown: 'requested_item_values[110][requested_item_value_attributes][cf_delivery_for_wfh_period_270753]',
         checkbox: 'requested_item_values[110][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[110][requested_item_value_attributes][cf_receiver_270753]',
         inputPhone: 'requested_item_values[110][requested_item_value_attributes][cf_phone_number_270753]',
         inputCity: 'requested_item_values[110][requested_item_value_attributes][cf_city_270753]',
         inputStreet: 'requested_item_values[110][requested_item_value_attributes][cf_street_name_270753]',
         inputHouse: 'requested_item_values[110][requested_item_value_attributes][cf_building_270753]',
         inputFlat: 'requested_item_values[110][requested_item_value_attributes][cf_apartment_270753]'
      },
      '116': {
         //TEST RINGTEAM BUSINESS CARDS PORTAL THINGIE requested_item_values[116][requested_item_value_attributes][cf_text_160390270455630_270753]
         dropdown: 'requested_item_values[116][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         dropdownCard: 'requested_item_values[116][requested_item_value_attributes][cf_business_cards_for_you_368543]',
         selectCardPersonId: 's2id_select2_new_jsVRt85fBCPJQ9RTXFF8eQrtz6cFI80C',
         selectCardPersonIdValued: 'select2_new_jsVRt85fBCPJQ9RTXFF8eQrtz6cFI80C',
         checkbox: 'requested_item_values[116][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377056_270753]',
         inputPhone: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377081_270753]',
         inputCity: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377094_270753]',
         inputStreet: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377147_270753]',
         inputHouse: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377178_270753]',
         inputFlat: 'requested_item_values[116][requested_item_value_attributes][cf_text_160389319377190_270753]'
      },
      '120': {
         dropdown: 'requested_item_values[120][requested_item_value_attributes][cf_delivery_type_1_270753]',
         checkbox: 'requested_item_values[120][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[120][requested_item_value_attributes][cf_bamboohr_270753]',
         inputPhone: 'requested_item_values[120][requested_item_value_attributes][cf_phone_number_270753]',
         inputCity: 'requested_item_values[120][requested_item_value_attributes][cf_city_270753]',
         inputStreet: 'requested_item_values[120][requested_item_value_attributes][cf_street_name_270753]',
         inputHouse: 'requested_item_values[120][requested_item_value_attributes][cf_building_270753]',
         inputFlat: 'requested_item_values[120][requested_item_value_attributes][cf_apartment_270753]'
      },
      '165': {
         dropdown: 'requested_item_values[165][requested_item_value_attributes][cf_dropdown_160275475687789_270753]',
         checkbox: 'requested_item_values[165][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[165][requested_item_value_attributes][cf_text_160259559164516_270753]',
         inputPhone: 'requested_item_values[165][requested_item_value_attributes][cf_text_160259559164547_270753]',
         inputCity: 'requested_item_values[165][requested_item_value_attributes][cf_text_160259559164573_270753]',
         inputStreet: 'requested_item_values[165][requested_item_value_attributes][cf_text_160259559164672_270753]',
         inputHouse: 'requested_item_values[165][requested_item_value_attributes][cf_building_1_270753]',
         inputFlat: 'requested_item_values[165][requested_item_value_attributes][cf_number_160269146502969_270753]'
      },
      '169': {
         dropdown: 'requested_item_values[169][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         checkbox: 'requested_item_values[169][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377056_270753]',
         inputPhone: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377081_270753]',
         inputCity: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377094_270753]',
         inputStreet: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377147_270753]',
         inputHouse: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377178_270753]',
         inputFlat: 'requested_item_values[169][requested_item_value_attributes][cf_text_160389319377190_270753]'
      },
      '170': {
         dropdown: 'requested_item_values[170][requested_item_value_attributes][cf_dropdown_160275475687789_270753]',
         checkbox: 'requested_item_values[170][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[170][requested_item_value_attributes][cf_text_160259559164516_270753]',
         inputPhone: 'requested_item_values[170][requested_item_value_attributes][cf_text_160259559164547_270753]',
         inputCity: 'requested_item_values[170][requested_item_value_attributes][cf_text_160259559164573_270753]',
         inputStreet: 'requested_item_values[170][requested_item_value_attributes][cf_text_160259559164672_270753]',
         inputHouse: 'requested_item_values[170][requested_item_value_attributes][cf_building_270753]',
         inputFlat: 'requested_item_values[170][requested_item_value_attributes][cf_number_160269146502969_270753]'
      },
      '171': null,
      '174': {
         dropdown: 'requested_item_values[174][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         checkbox: 'requested_item_values[174][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377056_270753]',
         inputPhone: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377081_270753]',
         inputCity: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377094_270753]',
         inputStreet: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377147_270753]',
         inputHouse: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377178_270753]',
         inputFlat: 'requested_item_values[174][requested_item_value_attributes][cf_text_160389319377190_270753]'
      },
      '183': null,
      '186': null,
      '194': {
         dropdown: 'requested_item_values[194][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         dropdownCard: 'requested_item_values[194][requested_item_value_attributes][cf_business_cards_for_you_270753]',
         selectCardPersonId: 's2id_select2_new_2WyddoyY1giGkM6gNA8N2zOmXhtr1LQZ',
         selectCardPersonIdValued: 'select2_new_2WyddoyY1giGkM6gNA8N2zOmXhtr1LQZ',
         checkbox: 'requested_item_values[194][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377056_270753]',
         inputPhone: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377081_270753]',
         inputCity: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377094_270753]',
         inputStreet: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377147_270753]',
         inputHouse: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377178_270753]',
         inputFlat: 'requested_item_values[194][requested_item_value_attributes][cf_text_160389319377190_270753]',
         inputJobTitle: ''
      },
      '195': {
         dropdown: 'requested_item_values[195][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         checkbox: 'requested_item_values[195][requested_item_value_attributes][cf_bamboohr_270753]',
         inputName: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377056_270753]',
         inputPhone: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377081_270753]',
         inputCity: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377094_270753]',
         inputStreet: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377147_270753]',
         inputHouse: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377178_270753]',
         inputFlat: 'requested_item_values[195][requested_item_value_attributes][cf_text_160389319377190_270753]'
      },
      '201': {
         dropdown: 'requested_item_values[201][requested_item_value_attributes][cf_please_choose_your_office_270753]',
         checkbox: 'requested_item_values[201][requested_item_value_attributes][cf_use_my_information_from_bamboohr_270753]',
         inputName: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657488_270753]',
         inputPhone: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657504_270753]',
         inputCity: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657520_270753]',
         inputStreet: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657564_270753]',
         inputHouse: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657579_270753]',
         inputFlat: 'requested_item_values[201][requested_item_value_attributes][cf_text_162765353657592_270753]'
      }
   };
   const buisnessCardTickets = ['116', '194'];
   const possibleDropdownOptions = ['адрес', 'Адресна доставка', 'Address Delivery', 'Address delivery'];

   const catalogueItemNumber = window.location.pathname.replace(/^\D+/g, '');
   const dropdownName = elementNames[catalogueItemNumber].dropdown;
   const checkboxName = elementNames[catalogueItemNumber].checkbox;
   const elementSet = elementNames[catalogueItemNumber];
   const dropdownCardName = elementNames[catalogueItemNumber].dropdownCard ? elementNames[catalogueItemNumber].dropdownCard : null;
   const selectCardPersonName = elementNames[catalogueItemNumber].selectCardPersonId ? elementNames[catalogueItemNumber].selectCardPersonId : null;
   const selectCardPersonIdValued = elementNames[catalogueItemNumber].selectCardPersonIdValued
       ? elementNames[catalogueItemNumber].selectCardPersonIdValued
       : null;

   let inputMateId;
   let jobTitle;
   let requestedMateName;
   let possibleTeammateEmail;
   let possibleTeammateName;

   if (serviceItems.includes(catalogueItemNumber)) {
      prepareDropdown(dropdownName, handleAddressDropdown);
      if (buisnessCardTickets.includes(catalogueItemNumber)) {
         substituteCardInput(catalogueItemNumber);
         prepareDropdown(dropdownCardName, handleCardDropdown);
      }

      function prepareDropdown(name, callback) {
         const dropdown = document.getElementsByName(name)[0];
         dropdown.classList = 'select2   dynamic_section';
         dropdown.style.maxWidth = '765px';

         const falseDivInputExists = dropdown.parentNode.getElementsByTagName('div')[0];
         if (falseDivInputExists) {
            dropdown.parentNode.getElementsByTagName('div')[0].innerHTML = '';
            dropdown.classList = 'select2   dynamic_section';
         }

         window.addEventListener('resize', function () {
            dropdown.classList = 'select2   dynamic_section';
            dropdown.parentNode.getElementsByTagName('div')[0].innerHTML = '';
         });

         dropdown.addEventListener('change', (event) => {
            setTimeout(callback, 200, event);
         });
      }

      function handleCardDropdown(_event) {
         const dropdownValue = _event.target.value;
         const possibleDropdownOptions = ['No, for my teammate'];

         if (possibleDropdownOptions.includes(dropdownValue)) {
            const mateDiv = document.getElementById(selectCardPersonName);
            inputMateId = document.getElementById(selectCardPersonIdValued);
            const selectorTimer = setInterval(checkSelector, 2000);

            function checkSelector() {
               const selector = mateDiv.firstChild.children[0].children[0].children[1];

               if (selector.innerText !== null || undefined) {
                  const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
                  possibleTeammateEmail = selector.innerText.match(regex)[0];
                  possibleTeammateName = selector.innerText.split('<')[0];
                  const testFlag = '&test=true';

                  if (inputMateId.value !== (undefined || null || '')) {
                     fetch(`https://freshservicecounter.ringteam.com/getuserdata?id=${inputMateId.value}${test ? testFlag : ''}`)
                         .then((response) => {
                            if (response.status === 200) {
                               console.log('got response');
                               return response.json();
                            } else if (response.status === 404) {
                               console.log(response);
                               throw new Error('User is not found in the Freshservice');
                            }
                         })
                         .then((data) => {
                            jobTitle = data.job_title;
                            if (test) {
                               requestedMateName = data.mobile_phone_number;
                            } else {
                               requestedMateName = data.work_phone_number;
                            }
                            console.log(requestedMateName);
                         })
                         .then(() => {
                            clearInterval(selectorTimer);
                         })
                         .catch((err) => {
                            console.log(err);
                            throw err;
                         });
                  }
               }
            }
         }
      }

      async function handleAddressDropdown(_event) {
         let phoneHolder = '';

         const testTickets = ['33', '116'];
         const checkRequestForTest = testTickets.includes(catalogueItemNumber)
             ? 'oksana.andriianova@ringteam.com'
             : currentUserEmail.replace(regexEmail, '@ringteam.com');

         const dropdownValue = _event.target.value;
         if (possibleDropdownOptions.includes(dropdownValue)) {
            const bambooCheckbox = Array.from(document.getElementsByName(checkboxName))[1];

            const spanElement = document.createElement('span');
            bambooCheckbox.parentNode.appendChild(spanElement);

            bambooCheckbox.addEventListener('change', async (event) => {
               if (event.target.checked) {
                  spanElement.style.fontSize = '1.2rem';
                  spanElement.style.color = 'darkgray';
                  spanElement.innerHTML = 'Please, wait we are looking for the information in BambooHR';

                  try {
                     const userBambooData = await getBambooData(
                         possibleTeammateEmail === undefined || null ? checkRequestForTest : possibleTeammateEmail
                     );
                     document.getElementsByName(elementSet.inputName)[0].value = userBambooData.name;
                     document.getElementsByName(elementSet.inputCity)[0].value = userBambooData.city;
                     document.getElementsByName(elementSet.inputPhone)[0].value = userBambooData.phone;
                     document.getElementsByName(elementSet.inputStreet)[0].value = userBambooData.street;
                     document.getElementsByName(elementSet.inputHouse)[0].value = userBambooData.house;
                     document.getElementsByName(elementSet.inputFlat)[0].value = userBambooData.flat;

                     if (buisnessCardTickets.includes(catalogueItemNumber)) {
                        prepareInfoBlock(_event.target.parentNode.parentNode);
                     }
                     spanElement.style.color = 'green';
                     spanElement.innerHTML = 'Your address details are found!';
                  } catch (error) {
                     spanElement.style.color = 'red';
                     spanElement.innerHTML = error.message;
                  }
               } else {
                  spanElement.style.color = 'grey';
                  spanElement.innerHTML = ' ';
               }
            });
         } else if (buisnessCardTickets.includes(catalogueItemNumber)) {
            const infoSpan = document.createElement('span');
            infoSpan.style.fontSize = '1.2rem';
            infoSpan.style.color = 'gray';
            infoSpan.innerText = 'Please wait for the business card information preview';
            const referenceBlock = _event.target.parentNode.parentNode.getElementsByClassName('dropdown custom_dropdown field ')[1];
            _event.target.parentNode.parentNode.insertBefore(infoSpan, referenceBlock);
            const userBambooData = await getBambooData(possibleTeammateEmail === undefined || null ? checkRequestForTest : possibleTeammateEmail);
            phoneHolder = userBambooData.phone;

            prepareInfoBlock(_event.target.parentNode.parentNode);
            infoSpan.innerText = '';
         }
      }

      function prepareInfoBlock(parentBlock) {
         const infoBlock = document.createElement('div');
         const textBlock = document.createElement('p');
         const heading = document.createElement('h4');
         const parsedName =
             possibleTeammateName !== undefined ? possibleTeammateName : toTitleCase(currentUserEmail.replace(regexEmail, '').replace('.', ' '));

         heading.innerText = `Please check information below \n`;
         textBlock.innerText = `${parsedName} \n ${
             jobTitle !== undefined ? jobTitle.split(',')[0] : currentUserJobTitle.split(',')[0]
         } \n ${phoneHolder} \n ${
             possibleTeammateEmail !== undefined ? possibleTeammateEmail.replace(regexEmail, '@squad.ua') : currentUserEmail
         }`;
         const referenceBlock = parentBlock.getElementsByClassName('dropdown custom_dropdown field ')[1];
         infoBlock.appendChild(heading);
         infoBlock.appendChild(textBlock);
         parentBlock.insertBefore(infoBlock, referenceBlock);
      }
   }

   function getBambooData(_requested) {
      return fetch(`https://freshservicecounter.ringteam.com/getbamboodata?email=${_requested}`)
          .then((response) => {
             if (response.status === 200) {
                console.log('got response');
                return response.json();
             } else if (response.status === 404) {
                throw new Error('We can`t find your address information. Please, add it to your profile');
             }
          })
          .then((data) => {
             console.log('parsing data');
             const dataMap = ['region', 'city', 'street', 'house', 'flat', 'bambooId', 'phoneNumber'];
             const parsedData = Object.keys(data).reduce(
                 (acc, key, i) => ({
                    ...acc,
                    ...{ [dataMap[i]]: data[key] }
                 }),
                 {}
             );
             currentUserPhone = parsedData.phoneNumber;
             phoneHolder = parsedData.phoneNumber;
             return {
                name: requestedMateName !== undefined ? requestedMateName : currentUserName,
                city: parsedData.city,
                phone: parsedData.phoneNumber,
                street: parsedData.street,
                house: parsedData.house,
                flat: parsedData.flat
             };
          })
          .catch((err) => {
             console.log(err);
          });
   }
});

const radioButtonsOptions = [];

function substituteCardInput(item) {
   const cardInput = {
      '116': 'requested_item_values[116][requested_item_value_attributes][cf_choose_business_card_option_368543]',
      '194': 'requested_item_values[194][requested_item_value_attributes][cf_choose_business_card_option_270753]',
      '33': ''
   };

   const cardInputElem = document.getElementsByName(cardInput[item])[0];
   const cardParentElem = cardInputElem.parentNode;

   cardInputElem.style.display = 'none';
   cardParentElem.appendChild(createRadioImageElem('https://i.postimg.cc/y86DFMQx/squad-bcard-preview-07-1-2-1.png', 'white', cardInputElem));
   cardParentElem.appendChild(createRadioImageElem('https://i.postimg.cc/GpcxTgYx/squad-bcard-preview-07-2-2.png', 'black', cardInputElem));
}

function createRadioImageElem(imageLink, value, realInput) {
   const option = document.createElement('label');
   const imageRadioButton = document.createElement('input');
   const imageRadioButtonImg = document.createElement('img');

   option.style.width = '480px';
   imageRadioButton.type = 'radio';
   imageRadioButton.value = value;
   // imageRadioButton.style.visibility = 'hidden';
   imageRadioButtonImg.src = imageLink;
   imageRadioButtonImg.style.cursor = 'pointer';

   option.appendChild(imageRadioButton);
   option.appendChild(imageRadioButtonImg);

   radioButtonsOptions.push(option);

   option.addEventListener('click', (event) => {
      event.preventDefault();
      imageRadioButton.checked = true;
      imageRadioButtonImg.style.boxSizing = 'border-box';
      imageRadioButtonImg.style.width = '100%';
      imageRadioButtonImg.style.border = 'solid 5px limegreen';
      realInput.value = imageRadioButton.value;

      radioButtonsOptions.forEach((option) => {
         const button = option.children[0];
         const image = option.children[1];
         if (button.value !== imageRadioButton.value) {
            button.checked = false;
            image.style.border = 'none';
         }
      });
   });
   return option;
}

const toTitleCase = (phrase) => {
   return phrase
       .toLowerCase()
       .split(' ')
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
};
