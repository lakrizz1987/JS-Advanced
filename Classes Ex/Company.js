class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            if (!this.departments.hasOwnProperty(department)) {
                let tempObj = { name: name, salary: salary, position: position }
                this.departments[department] = [tempObj];
            } else {
                this.departments[department].push({ name: name, salary: salary, position: position });
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let bestDepartament = '';
        let bestAvSalary = 0;
        for (const key in this.departments) {
            let curentAvSalary = 0;
            this.departments[key].forEach(element => {

                curentAvSalary += Number(element.salary);
            });
            curentAvSalary = curentAvSalary / this.departments[key].length;

            if (curentAvSalary > bestAvSalary) {
                bestAvSalary = curentAvSalary;
                bestDepartament = key;
            }
        }
        let output = '';
        output += `Best Department is: ${bestDepartament}\n`;
        output += `Average salary: ${bestAvSalary.toFixed(2)}\n`;

        let sorted = this.departments[bestDepartament].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        })

        sorted.forEach(x => output += `${x.name} ${x.salary} ${x.position}\n`);

        return output.trim();
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");