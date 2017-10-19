def palindrome(str):
  split_str = list(str)
  print split_str
  my_dict = {}

  for i in range(0, len(split_str)):
    #print split_str[i]
    bool = False
    if split_str[i] in  my_dict:
      my_dict[split_str[i]] = my_dict[split_str[i]]+1
    else:
      my_dict[split_str[i]] = 1

  print my_dict
  countone = 0
  for j in my_dict:
    #print my_dict.get(j)
    if my_dict.get(j)%2 != 0:
      countone = countone+1
  if countone != 1:
    return False
  return True


print(palindrome('livci'))
