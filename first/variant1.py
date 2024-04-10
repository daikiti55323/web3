class MultiplicationTable:
    def generate(cls, size=12):
        for i in range(1, size + 1):
            for j in range(1, size + 1):
                print(f"{i*j:4}", end=' ')
            print()  

MultiplicationTable.generate(12)
