import {useStrict, action, observable} from 'mobx';
useStrict(true);

class shoppingChat {

    //购物车已选
    @observable food = [];

    //选择食物，foodmsg 是前边的商品名和钱数
    @action addFood = (foodMsg) => {
        // this.food.map((f) => {
        //     console.log(f)
        //     if (f.name === foodMsg.name) {
        //         f.rmb += f.rmb
        //     } else if(this.food.includes(foodMsg) === false) {
        //         this.food.push(foodMsg);
        //     }
        // })
        /*先判断添加的商品是否已存在数组内，findindex（）里边跟的是一个匿名函数，如果没有等于-1的话，将点的商品添加进去
        * 如果有，再循环购物车里边的东西，找到商品，钱数继续累加 +=
        * */
        if(this.food.findIndex(function(value, index, arr) {
                return value.name === foodMsg.name;
            }) === -1) {
            this.food.push(foodMsg);
        } else {
            this.food.map((f) => {
                if (f.name === foodMsg.name) {
                    f.rmb += f.rmb
                }
            })
        }
    }
    //减食物的数量，减特定的钱数，为0时不能再减，如果不等于0时，可以减
    @action subtractFood = (foodMsg) =>{
        this.food.map((f)=>{
            if (f.name === foodMsg.name){
                if (f.rmb!==0){
                    f.rmb-=foodMsg.rmb
                }
            }
        })
    }
    //加食物的数量
    @action added =(foodMsg)=>{
        this.food.map((f) => {
            if (f.name === foodMsg.name) {
                f.rmb += f.rmb
            }
        })
    }
    //清空购物车，数组清空
    @action emptyChat = () =>{
        this.food = []
    }

}

export default new shoppingChat();