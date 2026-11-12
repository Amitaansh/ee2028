/******************************************************************************
 * clock.c - 80 MHz system clock from the MSI oscillator through the PLL
 ******************************************************************************/
#include "clock.h"
#include "app_config.h"
#include "main.h"

int clock_init(void)
{
#if ENH_FAST_CLOCK
	RCC_OscInitTypeDef osc = {0};
	RCC_ClkInitTypeDef clk = {0};

	__HAL_RCC_PWR_CLK_ENABLE();
	if (HAL_PWREx_ControlVoltageScaling(PWR_REGULATOR_VOLTAGE_SCALE1) != HAL_OK) return 0;

	osc.OscillatorType      = RCC_OSCILLATORTYPE_MSI;
	osc.MSIState            = RCC_MSI_ON;
	osc.MSICalibrationValue = RCC_MSICALIBRATION_DEFAULT;
	osc.MSIClockRange       = RCC_MSIRANGE_6;          /* 4 MHz, same as after reset */
	osc.PLL.PLLState        = RCC_PLL_ON;
	osc.PLL.PLLSource       = RCC_PLLSOURCE_MSI;
	osc.PLL.PLLM            = 1;
	osc.PLL.PLLN            = 40;                      /* 4 MHz x 40 = 160 MHz VCO */
	osc.PLL.PLLP            = RCC_PLLP_DIV2;
	osc.PLL.PLLQ            = RCC_PLLQ_DIV2;
	osc.PLL.PLLR            = RCC_PLLR_DIV2;           /* 160 / 2 = 80 MHz SYSCLK */
	if (HAL_RCC_OscConfig(&osc) != HAL_OK) return 0;

	clk.ClockType      = RCC_CLOCKTYPE_HCLK | RCC_CLOCKTYPE_SYSCLK | RCC_CLOCKTYPE_PCLK1 | RCC_CLOCKTYPE_PCLK2;
	clk.SYSCLKSource   = RCC_SYSCLKSOURCE_PLLCLK;
	clk.AHBCLKDivider  = RCC_SYSCLK_DIV1;
	clk.APB1CLKDivider = RCC_HCLK_DIV1;
	clk.APB2CLKDivider = RCC_HCLK_DIV1;
	/* 4 flash wait states covers up to 80 MHz in voltage range 1. HAL also
	 * re-tunes SysTick, so HAL_GetTick() stays at 1 ms. */
	if (HAL_RCC_ClockConfig(&clk, FLASH_LATENCY_4) != HAL_OK) return 0;
	return 1;
#else
	return 0;
#endif
}
