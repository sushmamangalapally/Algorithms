# -*- coding: utf-8 -*-

# Given a list of integers, find the highest product you can get from three of the integers.
# The input list_of_ints will always have at least three integers.

def list_of_ints(arr):
    print arr
    if(len(arr) < 3):
        console.log("Error!")
        return False
    first_max = arr[0]
    second_max = arr[1]
    third_max = arr[2]
    for i in range(0, len(arr)):
        if(arr[i] > first_max):
            temp = first_max
            first_max = arr[i]
            tempone = second_max
            third_max = tempone
        elif(first_max > arr[i] and  second_max < arr[i]):
            temptwo = second_max
            second_max = arr[i]
            third_max = temptwo
        elif(first_max > arr[i] and  second_max > arr[i] and third_max < arr[i]):
            third_max = arr[i]
    return first_max*second_max*third_max

print list_of_ints([-10,-10,1,3,2])

def answer(arr):
    if(len(arr) < 3):
        console.log("Error!")
        return False
    highest = max(arr[0], arr[1])
    lowest = min(arr[0], arr[1])

    highest_product_of_two=arr[0]*arr[1]
    lowest_product_of_two=arr[0]*arr[1]

    highest_product_of_three = arr[0]*arr[1]*arr[2]
    for i in range(2, len(arr)):
        highest_product_of_three = max(highest_product_of_three, highest_product_of_two*arr[i], lowest_product_of_two*arr[i])
        highest_product_of_two = max(highest_product_of_two, highest*arr[i], lowest*arr[i])
        lowest_product_of_two = min(lowest_product_of_two, highest*arr[i], lowest*arr[i])
        highest = max(highest, arr[i])
        lowest = min(lowest, arr[i])
    return highest_product_of_three
print answer([-10,-10,1,3,2])
