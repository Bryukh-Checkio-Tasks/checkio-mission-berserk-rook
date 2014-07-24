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
            "input": ('d3', {'d6', 'b6', 'c8', 'g4', 'b8', 'g6'}),
            "answer": 5,
            "explanation": ('d6', 'g6', 'b6', 'b8', 'c8')
        },
        {
            "input": ('a2', {'f6', 'f2', 'a6', 'f8', 'h8', 'h6'}),
            "answer": 6,
            "explanation": ('a6', 'f6', 'h6', 'h8', 'f8', 'f2')
        },
        {
            "input": ('a2', {'f6', 'f8', 'f2', 'a6', 'h6'}),
            "answer": 4,
            "explanation": ('a6', 'f6', 'f2', 'f8')
        },
    ],
    "Extra": [
        {
            "input": [6, 3],
            "answer": 9,
            "explanation": "6+3=?"
        },
        {
            "input": [6, 7],
            "answer": 13,
            "explanation": "6+7=?"
        }
    ]
}
