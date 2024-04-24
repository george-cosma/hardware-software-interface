#include <stdio.h>

int recursive(int x) {
    int a[10000];
    return recursive(x + 1);
}

int main() {
    int a = recursive(1);
    printf("Result from recursion: %d\n", a);
}