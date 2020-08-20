class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0;
  # Add your code here
    

    def computeDifference(self):
      i = 0;
      j = 1;
      listOfInts = self.__elements;
      currentDifference = 0;
      maximumDifference = 0;

      while i < len(listOfInts):
        if len(listOfInts) > i+j:
          currentDifference = abs(listOfInts[i] - listOfInts[i+j])
          if currentDifference > maximumDifference:
            maximumDifference = currentDifference
          j += 1;
        else:
          i += 1;
          j = 1;
      
      self.maximumDifference = maximumDifference;

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)