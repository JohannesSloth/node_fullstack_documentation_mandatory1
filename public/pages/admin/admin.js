const logoutBtn = document.getElementById("logout-btn");
const createMdForm = document.getElementById("createMdForm");

logoutBtn.addEventListener("click", () => {
  fetch("/logout", {
    method: "POST",
  })
    .then((res) => {
      if (res.ok) {
        window.location.href = "/login";
      } else {
        throw new Error("Logout failed");
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

createMdForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  fetch("/admin/create-md", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Markdown file created successfully!");
        createMdForm.reset();
      } else {
        alert("Error creating markdown file.");
      }
    })
    .catch((error) => console.error(error));
});
