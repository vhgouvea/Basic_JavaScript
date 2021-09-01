let weight

console.log(typeof weight)

{
    let name = "Victor Hugo"
    let age = 21
    //let stars = 9.9
    let isSubscribed = true
}

{
    let student = {}

    console.log(typeof student)
    
    student = {
        name: "Victor Hugo",
        age: 21,
        stars: 9.9,
        weight: 90.5,
        isSubscribed: true
    }
    
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} KG `)

    let students = [student]
    console.log(students)

    console.log(students[0])

    const john = {
        name: "Jhon",
        age: 21,
        stars: 9.9,
        weight: 90.5,
        isSubscribed: true
    }

    students = [students, john]
    console.log(students[1])

}
