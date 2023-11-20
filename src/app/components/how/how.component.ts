import { Component } from '@angular/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent {
  public steps: any = [
    {
      icon: "assets/Ikonate/person-add.svg",
      title: "Hesap Oluştur",
      content:""
    },
    {
      icon: "assets/Ikonate/support.svg",
      title: "Servis Seç",
      content: ""
    },
    {
      icon: "assets/Ikonate/qr.svg",
      title: "Barkod Oluştur",
      content: ""
    },
    {
      icon: "assets/Ikonate/new.svg",
      title: "İçeriği Düzenle",
      content: ""
    },
    {
      icon: "assets/Ikonate/download.svg",
      title: "Kaydet",
      content: ""
    },
    {
      icon: "assets/Ikonate/share-android.svg",
      title: "Paylaş",
      content: ""
    },
    {
      icon: "assets/Ikonate/edit.svg",
      title: "Değiştir",
      content: ""
    },
    {
      icon: "assets/Ikonate/trending-up.svg",
      title: "İstatistikleri İzle",
      content: ""
    },
    {
      icon: "assets/Ikonate/happy-face.svg",
      title: "Keyfini Sür",
      content: ""
    }







  ];
}
