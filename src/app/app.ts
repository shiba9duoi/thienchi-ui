import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NzBadgeModule, NzIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('thienchi-ui');
  @ViewChild('slider', { static: false }) slider!: ElementRef;
  @ViewChild('productSlider', { static: false }) productSlider!: ElementRef;
  categories: any[] | undefined;
  pharmacies : any[] | undefined;
  products : any[] | undefined;
  constructor(){
    this.categories = [
    {
      title: "Sức khỏe sinh sản",
      description: "Hỗ trợ tình dục, ...",
      bgColor: "#fde2e2",
      image: "https://www.medigoapp.com/assets/images-html/suc-khoe-sinh-san-category.png",
    },
    {
      title: "Thiết bị y tế",
      description: "Gạc, Bông gòn, Cồn, ...",
      bgColor: "#d7f2f9",
      image: "https://www.medigoapp.com/assets/images-html/thiet-bi-y-te-category.png",
    },
    {
      title: "Chăm sóc sắc đẹp",
      description: "Serum, Dưỡng trắng, Trị mụn,...",
      bgColor: "#fff9d8",
      image: "https://www.medigoapp.com/assets/images-html/cham-soc-sac-dep-category.png",
    },
    {
      title: "Thuốc",
      description: "Da liễu, Dị ứng, Tiêu hoá,...",
      bgColor: "#d9fbd4",
      image: "https://www.medigoapp.com/assets/images-html/thuoc-category.png",
    },
    {
      title: "Thực phẩm chức năng",
      description: "Hỗ trợ tăng cường, Bổ sung dưỡng chất,...",
      bgColor: "#dee6fd",
      image: "https://www.medigoapp.com/assets/images-html/thuc-pham-chuc-nang-category.png",
    },
    {
      title: "Chăm sóc cá nhân",
      description: "Xịt thơm miệng, Lăn khử mùi, Wax tẩy,...",
      bgColor: "#d8f4ff",
      image: "https://www.medigoapp.com/assets/images-html/cham-soc-ca-nhan-category.png",
    },
    {
      title: "Hỗ trợ giấc ngủ",
      description: "An thần, Ngủ ngon, ...",
      bgColor: "#fdf5d4",
      image: "https://www.medigoapp.com/assets/images-html/ho-tro-giac-ngu-category.png",
    },
    {
      title: "Phong độ bền lâu",
      description: "Hỗ trợ sinh lý,...",
      bgColor: "#ffe2c4",
      image: "https://www.medigoapp.com/assets/images-html/phong-do-ben-vung-category.png",
    }
  ] 
  this.pharmacies = [
    {
      name: 'Nhà Thuốc 24H',
      address: 'Bình Thạnh, Hồ Chí Minh',
      rating: 4.8,
      totalReview: 6051,
      chatTime: 'Dưới 2 phút',
      logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/z6747825859312_fc3ba3feee7987b791e9e048472eb225_4e139d7e80.jpg',
      premium: false
    },
    {
      name: 'Nhà Thuốc Circa Hàm Nghi',
      address: 'Quận 1, Hồ Chí Minh',
      rating: 4.9,
      totalReview: 16,
      chatTime: 'Dưới 2 phút',
      logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/circa_logo_35ef6bc323.png',
      premium: true
    },
    {
        name: 'Nhà Thuốc Cách mạng tháng 8',
        address: 'Quận 1, Hồ Chí Minh',
        rating: 4.9,
        totalReview: 16,
        chatTime: 'Dưới 2 phút',
        logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/circa_logo_35ef6bc323.png',
        premium: true
      },
    {
        name: 'Nhà Thuốc 24h rạch bùng binh',
        address: 'Quận 1, Hồ Chí Minh',
        rating: 4.9,
        totalReview: 16,
        chatTime: 'Dưới 2 phút',
        logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/z6747825859312_fc3ba3feee7987b791e9e048472eb225_4e139d7e80.jpg',
        premium: true
      },
    {
        name: 'Nhà Thuốc 24h rạch bùng binh',
        address: 'Quận 1, Hồ Chí Minh',
        rating: 4.9,
        totalReview: 16,
        chatTime: 'Dưới 2 phút',
        logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/z6747825859312_fc3ba3feee7987b791e9e048472eb225_4e139d7e80.jpg',
        premium: true
      },
    {
        name: 'Nhà Thuốc 24h rạch bùng binh',
        address: 'Quận 1, Hồ Chí Minh',
        rating: 4.9,
        totalReview: 16,
        chatTime: 'Dưới 2 phút',
        logo: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:1920/plain/https://www.medigoapp.com/uploads/z6747825859312_fc3ba3feee7987b791e9e048472eb225_4e139d7e80.jpg',
        premium: true
      }
    ]
    this.products = [
      {
        image: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:640/plain/https://cdn.medigoapp.com/product/small_Thuoc_tri_dau_da_day_Phosphalugel_hop_26_goi_1_080cc1bfc5_247f1fc5a1.webp',
        name: 'Thuốc trị đau dạ dày Phosphalugel hộp 26 gói',
        unit: '1 gói',
        price: 4100,
        sold: 16156
      },
      {
        image: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:640/plain/https://cdn.medigoapp.com/product/Alphachoay_hop_30_vien_7204138ed4.jpg',
        name: 'Alphachoy hộp 30 viên',
        unit: '1 viên',
        advice: true
      },
      {
        image: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:640/plain/https://cdn.medigoapp.com/product/efferalgan_500mg_1_bd509b5637.jpg',
        name: 'Viên sủi giảm đau, hạ sốt Efferalgan 500mg hộp 4 vỉ x 4 viên',
        unit: '1 viên',
        price: 2999,
        sold: 14265
      },
      {
        image: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:640/plain/https://cdn.medigoapp.com/product/thuoc_khang_viem_medrol_16mg_hop_30_vien_1_03e4ca0158.webp',
        name: 'Thuốc kháng viêm Medrol 16mg hộp 30 viên',
        unit: 'Vỉ 10 viên',
        advice: true
      },
      {
        image: 'https://image-proxy.medigoapp.com/unsafe/format:webp/rs:fit:640/plain/https://cdn.medigoapp.com/product/small_4a0c416e4a5548168791d5957c1ced8b_28b320c31a.webp',
        name: 'Thuốc kháng sinh Augmentin 1g hộp 14 viên',
        unit: '1 viên',
        advice: true
      },
       {
        image: 'https://cdn.medigoapp.com/product/Metronidazol_250mg_DHG_2b7aad541f.webp',
        name: 'Thuốc kháng sinh Metronidazol 250mg DHG hộp 100 viên',
        unit: '10 viên',
        advice: true
      }
    ];
  }

  scrollSlider(direction: 'left' | 'right') {
    const sliderEl = this.slider.nativeElement as HTMLElement;
    const scrollAmount = 260; // Card width + gap

    if (direction === 'left') {
      sliderEl.scrollLeft -= scrollAmount;
    } else {
      sliderEl.scrollLeft += scrollAmount;
    }
  }

  scrollProduct(direction: 'left' | 'right') {
    const el = this.productSlider.nativeElement as HTMLElement;
    const scrollAmount = 220;
    direction === 'left' ? el.scrollLeft -= scrollAmount : el.scrollLeft += scrollAmount;
  }
  
}
