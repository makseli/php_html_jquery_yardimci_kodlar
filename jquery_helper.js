  // Ajax ile yüklenen html i görme ve üstünde işlem yapabilmek için
  // 1) ajax işlemlerini bir fonksiyona atmalı. 
  // 2) $(document).ready(function (){ içerisinde o fonksiyon çağrılmalıdır ;)


  // toplu sil gibi bir işlem için
  // kayıt seçilmiş mi seçilmemiş kontrolü
  // kayıt seçilmişse toplu sil butonunu aktif et
        //toplu sil için
        var kayit_secim = 0;

        //tümünü seç checkbox u için
        $('#cb_grid').click(function () {

            //tümünü seç işaretlendi
            if ($(this).is(':checked'))
                kayit_secim = $('input:checkbox').length - 1;
            else
                kayit_secim = 0;
            
            toplu_sil_icin_secim_kontrol();

        });
        
        //normal tek kayıt için
        $(".cbox").click(function () { 
            if ($(this).attr('id') != 'cb_grid')
                toplu_sil_icin_isaretleme($(this).is(':checked'));
        });


    function toplu_sil_icin_isaretleme(nedir) {

        if (nedir) {
            kayit_secim++;
        } else {
            if (kayit_secim > 0)
                kayit_secim--;
        }

        toplu_sil_icin_secim_kontrol();
    }

    function toplu_sil_icin_secim_kontrol() {

        alert(kayit_secim);

        if (kayit_secim < 1)
            $('#toplu_sil').attr("disabled", true);
        else
            $('#toplu_sil').attr("disabled", false);
    }
