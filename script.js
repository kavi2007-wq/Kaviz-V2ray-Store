const toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}

document.querySelectorAll('.plan').forEach(btn=>btn.addEventListener('click',()=>{
  const plan=btn.dataset.plan;
  const msg=`Hi Kavizz V2Ray Store, I want to order: ${plan}. Please send me the next steps.`;
  window.open(`https://wa.me/94756914485?text=${encodeURIComponent(msg)}`,'_blank','noopener');
}));

document.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(btn.dataset.copy);showToast('Account number copied!')}catch(e){showToast('Copy failed — please copy manually.')}}));
