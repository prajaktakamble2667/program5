const companyEmployees = {
    companyInfo: {
      companyName: "Vinsys",
      location: "Pune",
      revenue: "$10 million"
    },
    employees: [
      {
        id: 1,
        name: "Prajakta kamble",
        position: "Software Engineer",
        department: "Engineering",
        salary: "80,000"
      },
      {
        id: 2,
        name: "Kaustubh dalvi",
        position: "Marketing Manager",
        department: "Marketing",
        salary: "90,000"
      },
      {
        id: 3,
        name: "Shivani Shinde",
        position: "HR",
        department: "Human Resources",
        salary: "70,000"
      }
    ]
  };
  
  console.log(companyEmployees.companyInfo.companyName); 
  console.log(companyEmployees.employees[0].name); 
  console.log(companyEmployees.employees[2].department); 
  