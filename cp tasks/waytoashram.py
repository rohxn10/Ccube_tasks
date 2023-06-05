inpt=input()
a,b,c=inpt.split(" ")

a= int(a)
b= int(b)
c= int(c)

x_reach= True if a%c ==0 else False
y_reach= True if b%c ==0 else False
if x_reach and y_reach:
    print("YES")

else:
    print("NO")
