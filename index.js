var stLinkURLInput = document.getElementById('LinkURLInput');
var stLinkURLOutput = document.getElementById('LinkURLOutput');
var stSiteNameOutput = document.getElementById('SiteNameOutput');
var stDescriptionOutput = document.getElementById('DescriptionOutput');
var toast = document.querySelector('.myToast');
var stToastMessage = document.getElementById('toastMessage');
function readLink() {
stLinkURLOutput.innerText = stLinkURLInput.value;
stLinkURLOutput.href = stLinkURLInput.value;
stDescriptionOutput.innerText = stDescriptionInput.value;
if (stOutputContainer.classList.contains('d-none')) {
stOutputContainer.classList.add('d-block');
stOutputContainer.classList.remove('d-none');
   }
}
function deleteLink() {
stSiteNameInput.value = 
stLinkURLInput.value =  
stLinkURLOutput.value = 
stDescriptionOutput.value = 
if (stOutputContainer.classList.add('d-none'); {
stOutputContainer.classList.remove('d-block');
stOutputContainer.classList.contains('d-block');
}

}
function editLink() {
   stSiteNameInput.value = stSiteNameOutput.innerText;
   stLinkURLInput.value = stLinkURLOutput.innerText;
   stDescriptionInput.value = stDescriptionOutput.innerText;

   if (stOutputContainer.classList.contains('d-block')) {
      stOutputContainer.classList.add('d-none');
      stOutputContainer.classList.remove('d-block');
   }
}
var settingForm = document.getElementById('SettingForm');
document.addEventListener('submit', function (e) {
   var urlTest = regex.test(stLinkURLInput.value);
   if (urlTest) {
      readLink()
      ShowToast("Link created successfully",  'white')
      if (stLinkURLInput.classList.contains('border-black')) {
         stLinkURLInput.classList.remove('black');}
   } else {
      e.preventDefault();
      ShowToast("Enter a valid URL begin with 'http://www.'",
      }
      stLinkURLInput.classList.add('border-black', 'border-5');
   }
);
function ShowToast(messageTxT, toastColor, fontColor) {
   toast.classList.add('adjecent-right');
 setTimeout(function () {
 toast.classList.remove('adjecent-right');