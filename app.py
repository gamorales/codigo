segundos=int(input("Escriba una cantidad de segundos"))
horas=segundos//3600
sobrante1=segundos%3600
minutos=sobrante1//60
sobrante2=sobrante1%60

print(f"""Tiempo equivale a: {segundos}
        Hora(s): {horas}
        Minuto(s): {minutos}
        Segundo(s): {sobrante2}""")
