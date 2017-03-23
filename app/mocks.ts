import {Student} from './students/student'
import {Product} from './Product/Product'
export const STUDENTS:Student[] = [{
		"id": 1,
		"studentId":"562110507",
		"name":"Prayuth",
		"surname":"Tu",
		"gpa":4.00,
		"image":"images/tu.jpg",
		"featured":true,
		"penAmount": 2
	},{
		"id": 2,
		"studentId":"562110509",
		"name":"Pu",
		"surname":"Priya",
		"gpa":0,
		"image":"images/pu.jpg",
		"featured":false,
		"penAmount": 3
	}
	];

export const PRODUCTS: Product[] = [{
		"id": 1,
		"name":"NB Minimus 40 Trainer",
		"description": "Run and train your way in the multi-tasking New Balance Minimus 40 cross trainer.",
        "image": "NB40.jpg",
        "price": 3500,
        "amount": 12,
        "rate": 4.5
	}, {
		"id": 2,
		"name":"NIKE PRESTO FLY",
		"description": "A remake of the 2000 original, the Nike Presto Fly Men's Shoe delivers a T-shirt-like feel for your foot, with a breathable, incredibly flexible upper.",
        "image": "NikePF.jpg",
        "price": 3200,
        "amount": 20,
        "rate": 3.8
	}];	

	