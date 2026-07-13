
async function loadCats() {
  const container=document.getElementById("catContainer");
  if(!container) return;
  try {
    const response=await fetch("data/cats.json");
    const cats=await response.json();
    cats.forEach(cat=> {
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`
      <h3>${cat.name}</h3>
      <p><strong>Age:</strong> ${cat.age}</p>
      <p><strong>Weight:</strong> ${cat.weight} lbs</p>
      <p><strong>Water Today:</strong> ${cat.waterToday} mL </p>
      <p><strong>Food:</strong> ${cat.food}</p>
      <p><strong>Status:</strong> ${cat.status}</p>;
      container.appendChild(card);
      });
      }
      catch(err){
      container.innerHTML="<p>Unable to load cat data.</p>";
      console.error(err);
      }
      }
      loadCats();
      
