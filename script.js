var data;
window.addEventListener("message", (event) => {


  if (event.data.action === "updateStatus") {
    
    $("#playerID").text("ID : " + event.data.id);
    event.data.health = event.data.health - 100;
    event.data.dive = event.data.dive * 10;
   
console.log("test",event.data.hunger);
console.log("stress",event.data.stress);

    $("#txtHp").text(event.data.health+"%");
    $("#txtArmor").text(event.data.armor+"%");
    $("#txtHunger").text( event.data.hunger+"%");
    $("#txtStress").text(event.data.stress+"%");
    $("#txtDiving").text(event.data.dive+"%");
    

    if (event.data.health > 20) {
      $("#hp").css("width", event.data.health + "%");
      $("#box_hp").removeClass("blink");
    } else if (event.data.health <= 20) {
      $("#hp").css("width", event.data.health + "%");
      $("#box_hp").addClass("blink");
    }

    if (event.data.armor > 20) {
      $("#armor").css("width", event.data.armor + "%");
    } else if (event.data.armor <= 20) {
      $("#armor").css("width", event.data.armor + "%");
    }

    if (event.data.stress > 20) {
      $("#stress").css("width", event.data.stress + "%");
    } else if (event.data.armor <= 20) {
      $("#stress").css("width", event.data.stress + "%");
    }

    if (event.data.stamina > 10) {
      $("#stamina").css("width", event.data.stamina + "%");
      $("#stamina").removeClass("blink");
    } else if (event.data.stamina <= 10) {
      $("#stamina").addClass("blink");
      $("#stamina").css("width", event.data.stamina + "%");
    }

    if (event.data.dive > 20) {
      $("#diving").css("width", event.data.dive + "%");
      $("#box_diving").removeClass("blink");
    } else if (event.data.dive <= 20) {
      $("#diving").css("width", event.data.dive + "%");
      $("#box_diving").addClass("blink");
    }

    if (event.data.hunger > 20) {
      $("#hunger").css("width", event.data.hunger + "%");
    } else if (event.data.dive <= 20) {
      $("#hunger").css("width", event.data.hunger + "%");
    }
    if (!event.data.flagTxt) {
      hideAllText();
    }
  } else if (event.data.action === "blinkDiv") {
    if (event.data.div === "อาหาร") {
      if (flaghunger === false) {
        flaghunger = true;
        $("#box_hunger").addClass("blink");
        setTimeout(function () {
          $("#box_hunger").removeClass("blink");
          flaghunger = false;
        }, 3000);
      } else {
      }
    } else if (event.data.div === "ความเครียด") {
      if (flagstress === false) {
        flagstress = true;
        $("#box_stress").addClass("blink");
        setTimeout(function () {
          $("#box_stress").removeClass("blink");
          flagstress = false;
        }, 3000);
      } else {
      }
    }
  } else if (event.data.action === "openUI") {
    setNuiDisplay(event.data.display);
  }
});

function hideAllText() {
  $(".tagnum").hide();
  $("#playerID").show();
}

$(document).ready(function () {
  // hideAllText();
});
function setNuiDisplay(display) {
  if (display) {
    $(".containerwrap").fadeIn();
  } else {
    $(".containerwrap").fadeOut();
  }
}
