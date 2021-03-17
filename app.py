segundos=int(input("Escriba una cantidad de segundos"))
horas=segundos//3600
sobrante1=segundos%3600
minutos=sobrante1//60
sobrante2=sobrante1%60

print("segundos equivalen a:",horas,"Hora(s)",minutos,"minutos","y",sobrante2,"segundos")
