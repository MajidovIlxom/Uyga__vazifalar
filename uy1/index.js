class Food 
{
    constructor(food) 
    {
        this.food = food
    }
    ingredients(food)
    {
        if (food=="osh") 
        {
            return ["tuz","yog'","sabzi","guruch","go'sht","ziravolar","no'xat","piyoz"]
        }
        else if (food=="sho'rva") 
        {
            return ["tuz","yog'","sabzi","kartoshka","go'sht","ziravolar","no'xat","piyoz"]
        }
        else if (food=="somsa") 
        {
            return ["tuz","xamir","piyoz","go'sht","ziravolar"]
        }
        else if (food=="Dimlama") 
        {
            return ["tuz","yog'","gusht","kartoshka","piyoz","sabzi","shalg'om","ziravolar","suv"]
        }
        else if (food=="manti")
        {
            return ["tuz","sar-yog'","xamir", "gusht","kartoshka","mehir"]
        }
        else  
        {
            return "Bizda bunday mahsultot topilmadi"
        }

    }
    
}

module.exports = Food