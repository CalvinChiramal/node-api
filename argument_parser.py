# Class to store command line arguments
class Arguments:
    def __init__(self, input):

        # Initializing default values
        if input == None:
            input = 'videos/cctv_footage.mp4'
        self.input = input

# Function to parse command line arguments
def parseArguments(ap):
    """
    Parses command line arguments and returns an object of type Arguments.
    """
    
    ap.add_argument("-i", "--input",
                    help="path to input file")
    args = vars(ap.parse_args())

    return Arguments(input=args["input"])