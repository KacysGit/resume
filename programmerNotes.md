Good way to make a slideshow of pictures:

<button onclick="exchangeRaccoons()">Start</button> <br>
                    
                    <img id="myRaccoon" src="https://images5.alphacoders.com/879/thumb-1920-879716.jpg" width="275" height="270" alt="Unknown raccoon image">

                    <script>
                    var index = 0;
                    var imageList = ['https://images.saferbrand.com/is/image/woodstream/sb-lc-pest-animals-raccoon-in-trash-can?qlt=75' , 'https://tse2.mm.bing.net/th?id=OIP.zfL7B59Hk8eci5P_zHEh4wHaEd&pid=Api&P=0'];

                    function exchangeRaccoons() {
                    index = index + 1;
                    if (index == imageList.length) {
                        index = 0;
                    }
                    var image1 = document.getElementById("myRaccoon");
                    image1.src = imageList[index];
                    }
                    </script>