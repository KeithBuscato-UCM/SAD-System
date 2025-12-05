document.addEventListener("DOMContentLoaded", () => {
  
    const profilePhoto = document.querySelector(".profile-photo");
    const savedPic = localStorage.getItem("profilePicture");
    if (savedPic && profilePhoto) {
        profilePhoto.style.backgroundImage = `url(${savedPic})`;
        profilePhoto.style.backgroundSize = "cover";
        profilePhoto.style.backgroundPosition = "center";
        profilePhoto.style.borderRadius = "50%"; 
    }

    const ownerName = document.querySelector(".owner-details p:nth-child(1)");
    const ownerContact = document.querySelector(".owner-details p:nth-child(2)");
    const ownerEmail = document.querySelector(".owner-details p:nth-child(3)");

    const fName = localStorage.getItem("firstName") || "Kim";
    const lName = localStorage.getItem("lastName") || "Rangaig";
    const contact = localStorage.getItem("contact") || "0911 222 3333";
    const email = localStorage.getItem("email") || "kimrang21@gmail.com";

    if (ownerName) ownerName.innerHTML = `<strong>Dorm Owner:</strong> ${fName} ${lName}`;
    if (ownerContact) ownerContact.innerHTML = `<strong>Contact No.:</strong> ${contact}`;
    if (ownerEmail) ownerEmail.innerHTML = `<strong>Email:</strong> ${email}`;
});
