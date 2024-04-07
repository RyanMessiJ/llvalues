function showOptions() {
            //Loomian Typing
            var selectedGleam = document.getElementById("gleamOptions") ? document.getElementById("gleamOptions").value : "";
            var selectedType = document.getElementById("alpha").style.display === "block" ?
                document.getElementById("alphaOptions").value :
                document.getElementById("gammaOptions").value;

            var rrSelect = document.getElementById("rr");
            var othersSelect = document.getElementById("boonary");
            var pyramindSelect = document.getElementById("pyramind");

            console.log("Selected Gleam Type:", selectedGleam);
            console.log("Selected Loomian Type:", selectedType);

            //Loomian Species

            // Hide/show Loomian Type dropdowns based on gleam type
            if (selectedGleam === "alpha") {
                alpha.style.display = "block";
                gamma.style.display = "none";
            } else if (selectedGleam === "gamma") {
                alpha.style.display = "none";
                gamma.style.display = "block";
            }

            // Hide/show options based on selected type
            rrSelect.style.display = selectedType === "rr" ? "block" : "none";
            othersSelect.style.display = selectedType === "boonary" ? "block" : "none";
            pyramindSelect.style.display = selectedType === "pyramind" ? "block" : "none";


            // Values
            var selectedType = document.getElementById("gpyra").value;
            var gpyraText = document.getElementById("gpyraText");

            var selectedType = document.getElementById("gboonary").value;
            var gboonText = document.getElementById("gboonText");

            gboonText.style.display = selectedType === "boon" ? "block" : "none";
            gpyraText.style.display = selectedType === "pyra" ? "block" : "none";
        }