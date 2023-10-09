def calculate_grade(marks);
    if marks > 79:
        return "A"
    elif 60 <= marks <= 79;
        return "B"
    elif 50 <= marks <= 59;
        return "C"
    elif 40 <= marks <= 49;
        return "D"
    else:
        return "E"

try:
    student_marks = float(input("Enter student marks (0-100): "))
    if 0 <= student_marks <= 100
        grade = calculate_grade(student_marks)
        print(f"Grade: {grade}")
    else:
        print("Invalid input. Marks should be between 0 and 100.")
except ValueError:
    print("Invalid input. Please enter a valid number.")

    def calculate_demerit_points(speed):
    speed_limit = 70
    demerit_points = (speed - speed_limit) // 5
    return max(0, demerit_points)

try:
    car_speed = float(input("Enter car speed (in km/h): "))
    if car_speed < 0:
        print("Invalid input. Speed cannot be negative.")
    else:
        if car_speed <= 70:
            print("Ok")
        else:
            demerit_points = calculate_demerit_points(car_speed)
            print(f"Points: {demerit_points}")
            if demerit_points > 12:
                print("License suspended")
except ValueError:
    print("Invalid input. Please enter a valid number.")


    def calculate_net_salary(basic_salary, benefits):
    # Constants for tax, NHIF, and NSSF rates (you can adjust these as needed)
    tax_rate = 0.15
    nhif_rate = 0.08
    nssf_rate = 0.07

    gross_salary = basic_salary + benefits
    tax_deduction = gross_salary * tax_rate
    nhif_deduction = gross_salary * nhif_rate
    nssf_deduction = gross_salary * nssf_rate
    net_salary = gross_salary - tax_deduction - nhif_deduction - nssf_deduction

    return net_salary

try:
    basic_salary = float(input("Enter basic salary: "))
    benefits = float(input("Enter benefits: "))
    
    net_salary = calculate_net_salary(basic_salary, benefits)
    
    print(f"Gross Salary: {basic_salary + benefits}")
    print(f"Tax Deduction: {net_salary * 0.15}")
    print(f"NHIF Deduction: {net_salary * 0.08}")
    print(f"NSSF Deduction: {net_salary * 0.07}")
    print(f"Net Salary: {net_salary}")
except ValueError:
    print("Invalid input. Please enter valid numbers for basic salary and benefits.")
