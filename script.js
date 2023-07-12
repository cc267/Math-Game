function openModal(imageSrc) {
            var modal = document.getElementById("myModal");
            var modalImage = document.getElementById("modalImage");

            modal.style.display = "block";
            modalImage.src = imageSrc;
        }

        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }