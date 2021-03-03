/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
    width: 10,
    height: 20,
   getWidth() {
        console.log(this.width);
   },
   getHeight() {
        console.log(this.height);
   },

   getArea() {
       var dientich = this.height * this.width;
       return dientich;
   }
}
console.log(rectangle.getArea());