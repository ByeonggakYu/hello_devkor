import numpy as np
w = 1.0

def forward(x):
    return x * w;

def loss(x, y):
    y_pred = forward(x)
    return (y_pred - y) * (y_pred - y)

