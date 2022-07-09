const goa={
    name:"Amar",
    skill:"singer",
    getSkill(){
        console.log(`Getting skill of ${this.skill} from friend ${this.name}`)
    }
}


const mumbai={
    name:"Akbar",
    skill:"chef",
    getskill2(){
        console.log(`Getting skill of ${this.skill}  from friend ${this.name}`)
    }
}

const kashmir={
    name:"Anthony",
    skill:"magician",
    getSkill3(){
        console.log(`Getting skill of ${this.skill}  from friend ${this.name}`)
    }
}

 goa.getSkill.call(mumbai);
 goa.getSkill.call(kashmir);
 mumbai.getskill2.call(goa);
 mumbai.getskill2.call(kashmir);
 kashmir.getSkill3.call(goa);
 kashmir.getSkill3.call(mumbai);
