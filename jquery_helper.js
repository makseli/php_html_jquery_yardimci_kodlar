  // Ajax ile yüklenen html i görme ve üstünde işlem yapabilmek için
  // 1) ajax işlemlerini bir fonksiyona atmalı. 
  // 2) $(document).ready(function (){ içerisinde o fonksiyon çağrılmalıdır ;)


  // toplu sil gibi bir işlem için
  // kayıt seçilmiş mi seçilmemiş kontrolü
  // kayıt seçilmişse toplu sil butonunu aktif et
        //toplu sil için
        var kayit_secim = 0;

        $("#cb_grid").click(function () {
            if (kayit_secim > 0)
                kayit_secim = 0;

            kayit_secim_kontrol();
        });

        //toplu sil kontrolü
        $(".cbox").click(function () {

            if ($(this).is(':checked')) {
                kayit_secim++;
            } else {
                if(kayit_secim>0)
                    kayit_secim--;
            }

            kayit_secim_kontrol();
        });

        function kayit_secim_kontrol() {

            //alert(kayit_secim);

            if (kayit_secim < 1)
                $('#toplu_sil').attr("disabled", true);
            else
                $('#toplu_sil').attr("disabled", false);

        }
