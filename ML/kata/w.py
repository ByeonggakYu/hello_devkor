x_data = [1, 2, 3]
y_data = [2,4,6]

w = 1.0

def forward(x):
    return x * w;

def loss(x,y):
    y_pred = forward(x)
    return (y_pred - y) * (y_pred - y)

def gradient(x, y):
    return 2 * x * (x*w - y)

for epoch in range(100):
    for x_val, y_val in zip(x_data, y_data):
        grad = gradient(x_val, y_val)
        w = w - 0.01 * grad
        print("\tgrad: ", x_val, y_val, grad)

    
    print("progress:", epoch, "w=", w, "loss=" , 1)

print("predict (after training)", "4 hours", forward(4))