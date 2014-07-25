"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": ('d3', ('d6', 'b6', 'c8', 'g4', 'b8', 'g6')),
            "answer": 5,
            "explanation": ('d6', 'g6', 'b6', 'b8', 'c8')
        },
        {
            "input": ('a2', ('f6', 'f2', 'a6', 'f8', 'h8', 'h6')),
            "answer": 6,
            "explanation": ('a6', 'f6', 'h6', 'h8', 'f8', 'f2')
        },
        {
            "input": ('a2', ('f6', 'f8', 'f2', 'a6', 'h6')),
            "answer": 4,
            "explanation": ('a6', 'f6', 'f2', 'f8')
        },
    ],
    "Extra": [
        {
            "input": ('c5', ('h5',)),
            "answer": 1,
            "explanation": ('h5',)
        },
        {
            "input": ('c5', ('e3', 'b6', 'e7', 'f2', 'd6', 'b4', 'g8', 'd4')),
            "answer": 0,
            "explanation": []
        },
        {
            "input": ('e5', ('e8', 'e2', 'h8', 'h5', 'b5', 'h2', 'b2', 'b8')),
            "answer": 8,
            "explanation": ('b5', 'b8', 'b2', 'e2', 'h2', 'h5', 'h8', 'e8')
        },
        {
            "input": ('c5', ('a5', 'd5', 'g5', 'h5', 'b5', 'e5', 'f5')),
            "answer": 7,
            "explanation": ('b5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a5')
        },
        {
            "input": ('e1', ('e8', 'h1', 'c2', 'h5', 'e4', 'a1', 'e6', 'a3')),
            "answer": 3,
            "explanation": ('a1', 'h1', 'h5')
        },
        {
            "input": ('h1', ('a5', 'b6', 'e2', 'a2', 'h5', 'e4', 'e6', 'h7')),
            "answer": 7,
            "explanation": ('h5', 'a5', 'a2', 'e2', 'e4', 'e6', 'b6')
        },
        {
            "input": ('c7', ('d5', 'f7', 'e6', 'e7', 'c5', 'd6', 'e5', 'c6')),
            "answer": 8,
            "explanation": ('c6', 'd6', 'd5', 'c5', 'e5', 'e6', 'e7', 'f7')
        },
        {
            "input": ('c7', ('d5', 'f7', 'e7', 'c5', 'd6', 'd4', 'c6', 'c4')),
            "answer": 6,
            "explanation": ('c6', 'd6', 'd5', 'd4', 'c4', 'c5')
        },
    ]
}
