/******************************************************************************
 * sys_stubs.c - minimal C-library system call stub
 *
 * The course template excludes syscalls.c from the build (semihosting via
 * rdimon is used instead). libc still references _kill(), so the linker fell
 * back to a "not implemented" stub and printed a warning, which STM32CubeIDE
 * then miscounted as a build error. Defining it here silences that.
 ******************************************************************************/
#include <errno.h>

int _kill(int pid, int sig)
{
	(void)pid;
	(void)sig;
	errno = EINVAL;
	return -1;
}
