const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const modal=$("#modal"),toast=$("#toast");
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove("show"),2200)}
$("#createBtn").onclick=()=>modal.classList.remove("hidden");
$("#closeModal").onclick=()=>modal.classList.add("hidden");
modal.onclick=e=>{if(e.target===modal)modal.classList.add("hidden")};
$("#publishBtn").onclick=()=>{const title=$("#newTitle").value.trim();if(!title){showToast("Digite um título para publicar.");return}modal.classList.add("hidden");$("#newTitle").value="";$("#newBody").value="";showToast("Publicação criada (demonstração).")};
$("#joinBtn").onclick=e=>{e.currentTarget.classList.toggle("joined");e.currentTarget.textContent=e.currentTarget.classList.contains("joined")?"Você entrou ✓":"Entrar na comunidade";showToast("Ação simulada — sem backend.")};
$$(".vote-btn").forEach(btn=>btn.onclick=()=>{const post=btn.closest(".post"),score=post.querySelector(".vote strong");let n=parseInt(score.textContent.replace(/[^0-9]/g,""))||0;n=btn.classList.contains("up")?n+1:Math.max(0,n-1);score.textContent=n>=1000?(n/1000).toFixed(1).replace(".0","")+" mil":n;btn.classList.toggle("selected")});
$$(".post-actions button").forEach(btn=>btn.onclick=()=>showToast("Ação simulada — interface sem backend."));
$$(".tab").forEach(tab=>tab.onclick=()=>{$$(".tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");showToast("Filtro: "+tab.textContent.trim())});
$("#searchInput").addEventListener("input",e=>{const q=e.target.value.toLowerCase();$$(".post").forEach(post=>post.style.display=post.innerText.toLowerCase().includes(q)?"flex":"none")});
$("#loginBtn").onclick=()=>showToast("Login — interface demonstrativa.");