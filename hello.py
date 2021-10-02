import argparse
from argument_parser import parseArguments

ap = argparse.ArgumentParser()
args = parseArguments(ap)

print(args.input)
