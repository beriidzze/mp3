class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Сын", "MiyaGi", "1.jpg", "1.mp3"),
  new Music("В Последний Раз", "MiyaGi & Эндшпиль", "2.jpg", "2.mp3"),
  new Music("Голова", "Эндшпиль", "3.jpg", "3.mp3"),
];
