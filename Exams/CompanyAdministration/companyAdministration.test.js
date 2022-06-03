let companyAdministration = require('./companyAdministration');
let {assert,expect} = require('chai');

describe('Test companyAdministration functionality',()=>{
    //hiringEmployee
    it('Test hiringEmployee position not equal to Programmer shold throw error',()=>{
        assert.throws(() => { companyAdministration.hiringEmployee('Pesho','Manager',5) }, Error);
    });

    it('Test hiringEmployee position equal to Programer and years 3 shold return result',()=>{
        let name = 'Pesho';
        let position = 'Programmer'
        let exp = 3
        expect(companyAdministration.hiringEmployee(name,position,exp)).to.equal(`${name} was successfully hired for the position ${position}.`)
    })

    it('Test hiringEmployee position equal to Programer and years 5 shold return result',()=>{
        let name = 'Pesho';
        let position = 'Programmer'
        let exp = 5
        expect(companyAdministration.hiringEmployee(name,position,exp)).to.equal(`${name} was successfully hired for the position ${position}.`)
    })

    it('Test hiringEmployee position equal to Programer and years 1 shold return result',()=>{
        let name = 'Pesho';
        let position = 'Programmer'
        let exp = 1
        expect(companyAdministration.hiringEmployee(name,position,exp)).to.equal(`${name} is not approved for this position.`)
    })
    it('Test hiringEmployee position equal to Programer and years -1 shold return result',()=>{
        let name = 'Pesho';
        let position = 'Programmer'
        let exp = -1
        expect(companyAdministration.hiringEmployee(name,position,exp)).to.equal(`${name} is not approved for this position.`)
    })

    //calculateSalary
    it('Test calculateSalary shold throw error if param is str not number',()=>{
        assert.throws(() => { companyAdministration.calculateSalary('2') }, Error);
    });

    it('Test calculateSalary shold throw error if param is empty str not number',()=>{
        assert.throws(() => { companyAdministration.calculateSalary('') }, Error);
    });

    it('Test calculateSalary shold throw error if param is negative number',()=>{
        assert.throws(() => { companyAdministration.calculateSalary('') }, Error);
    });

    it('Test calculateSalary if hours are > 160',()=>{
        let total = 0;
        let hours = 161;
        if(hours > 160){
            total += 1000
        }
        total += hours * 15
        expect(companyAdministration.calculateSalary(hours)).to.equal(total);
    });



    it('Test calculateSalary if hours are < 160',()=>{
        let total = 0;
        let hours = 100;
        if(hours > 160){
            total += 1000
        }
        total += hours * 15
        expect(companyAdministration.calculateSalary(hours)).to.equal(total);
    });

    it('Test calculateSalary if hours are 0',()=>{
        let total = 0;
        let hours = 0;
        if(hours > 160){
            total += 1000
        }
        total += hours * 15
        expect(companyAdministration.calculateSalary(hours)).to.equal(total);
    });

    //firedEmployee
    it('Test firedEmployee shold throw error if first param is str not arr',()=>{
        assert.throws(() => { companyAdministration.firedEmployee('Pesho',1) }, Error);
    });
    it('Test firedEmployee shold throw error if first param is obj not arr',()=>{
        assert.throws(() => { companyAdministration.firedEmployee({name:'petko'},1) }, Error);
    });
    it('Test firedEmployee shold throw error if first param is num not arr',()=>{
        assert.throws(() => { companyAdministration.firedEmployee(2,1) }, Error);
    });
    it('Test firedEmployee shold throw error if first param is empty str not arr',()=>{
        assert.throws(() => { companyAdministration.firedEmployee('',1) }, Error);
    });
    it('Test firedEmployee shold throw error if second param is str not num',()=>{
        assert.throws(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'2') }, Error);
    });
    it('Test firedEmployee shold throw error if second param is empty str',()=>{
        assert.throws(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'') }, Error);
    });
    it('Test firedEmployee shold throw error if second param is outside arr',()=>{
        assert.throws(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"],5) }, Error);
    });
    it('Test firedEmployee shold throw error if second param is negative',()=>{
        assert.throws(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-2) }, Error);
    });

    it('Test firedEmployee shold return result',()=>{
        
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1)).to.equal(`Petar, George`);
    })
    it('Test firedEmployee shold return result',()=>{
        
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.equal(`Ivan, George`);
    })
    it('Test firedEmployee shold return result',()=>{
        
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],2)).to.equal(`Petar, Ivan`);
    })
    it('Test firedEmployee shold return result',()=>{
        
        expect(companyAdministration.firedEmployee(["Petar","Petar", "Ivan", "George"],2)).to.equal(`Petar, Petar, George`);
    })
})