import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component{
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "/img/img1.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 2,
                "cnt":  1,
                "sex": "m"
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "/img/nild1.jpg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 2,
                "cnt":  1,
                "sex": "f"
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "/img/nild2.jpg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["black", "blue", "teal"],
                "count": 3,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "/img/img2.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["black", "blue", "teal"],
                "count": 3,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "/img/img3.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "black"],
                "count": 5,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "6",
                "title": "Apex Shoes 01",
                "src": "/img/apld1.jpeg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "7",
                "title": "Apex Shoes 02",
                "src": "/img/apld2.jpeg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "8",
                "title": "Apex Shoes 03",
                "src": "/img/ap1.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 4,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "9",
                "title": "Apex Shoes 04",
                "src": "/img/apld3.jpg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "10",
                "title": "Apex Shoes 05",
                "src": "/img/ap2.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["white", "blue", "green"],
                "count": 4,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "11",
                "title": "Bata Shoes 01",
                "src": "/img/btld1.jpg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["white", "blue", "green"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "12",
                "title": "Bata Shoes 02",
                "src": "/img/bt1.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["white", "blue", "green"],
                "count": 4,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "13",
                "title": "Bata Shoes 03",
                "src": "/img/btld2.jpg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["white", "blue", "green"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            },
            {
                "_id": "14",
                "title": "Bata Shoes 04",
                "src": "/img/bt2.jpg",
                "description": "Sport Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["#3F535E","white", "#191970", "#808080"],
                "count": 4,
                "cnt":1,
                "sex": "m"
            },
            {
                "_id": "15",
                "title": "Bata Shoes 05",
                "src": "/img/btld3.jpeg",
                "description": "Ladies Shoes",
                "content": "Different colors of materials show the different densities",
                "price": 19,
                "colors": ["white", "blue", "green"],
                "count": 4,
                "cnt":1,
                "sex": "f"
            }
        ],
        cart: [],
        total: 0
    };

    addCart = (id) => {
        const {products,cart} = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({cart: [...cart,...data]});
            this.getTotal();
        }
        else{
            alert("The product has been added to cart.");
        }
        console.log(cart);
        
    };
    reduction = (id) =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.cnt === 1 ? item.cnt = 1 : item.cnt -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                if(item.cnt+1 > item.count)
                    alert("Out of stock");
                else
                    item.cnt += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };
    removeAllProduct = () => {
        const {cart} = this.state;
            cart.splice(0,cart.length);
    }

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.cnt);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   
  render(){
      const {products, cart,total} = this.state;
      const {addCart, increase, reduction,removeProduct,removeAllProduct,getTotal} = this;
    return(
      <DataContext.Provider value = {{products, addCart, cart, reduction, increase,removeProduct,removeAllProduct,total,getTotal}}>
          {this.props.children}
      </DataContext.Provider>
    )
  }
}
