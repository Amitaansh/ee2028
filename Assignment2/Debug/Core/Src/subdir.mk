################################################################################
# Automatically-generated file. Do not edit!
# Toolchain: GNU Tools for STM32 (13.3.rel1)
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
../Core/Src/button.c \
../Core/Src/buzzer.c \
../Core/Src/clock.c \
../Core/Src/comms.c \
../Core/Src/drone.c \
../Core/Src/enhancements.c \
../Core/Src/game_link.c \
../Core/Src/habitat.c \
../Core/Src/hud.c \
../Core/Src/laser.c \
../Core/Src/main.c \
../Core/Src/nav.c \
../Core/Src/oled.c \
../Core/Src/oled_bus.c \
../Core/Src/sensors.c \
../Core/Src/soft_i2c.c \
../Core/Src/stm32l4xx_hal_msp.c \
../Core/Src/stm32l4xx_it.c \
../Core/Src/sys_stubs.c \
../Core/Src/sysmem.c \
../Core/Src/system_stm32l4xx.c \
../Core/Src/tele_oled.c \
../Core/Src/tilt.c \
../Core/Src/tof.c \
../Core/Src/turret.c \
../Core/Src/uart_rx.c \
../Core/Src/vl53l0x.c 

OBJS += \
./Core/Src/button.o \
./Core/Src/buzzer.o \
./Core/Src/clock.o \
./Core/Src/comms.o \
./Core/Src/drone.o \
./Core/Src/enhancements.o \
./Core/Src/game_link.o \
./Core/Src/habitat.o \
./Core/Src/hud.o \
./Core/Src/laser.o \
./Core/Src/main.o \
./Core/Src/nav.o \
./Core/Src/oled.o \
./Core/Src/oled_bus.o \
./Core/Src/sensors.o \
./Core/Src/soft_i2c.o \
./Core/Src/stm32l4xx_hal_msp.o \
./Core/Src/stm32l4xx_it.o \
./Core/Src/sys_stubs.o \
./Core/Src/sysmem.o \
./Core/Src/system_stm32l4xx.o \
./Core/Src/tele_oled.o \
./Core/Src/tilt.o \
./Core/Src/tof.o \
./Core/Src/turret.o \
./Core/Src/uart_rx.o \
./Core/Src/vl53l0x.o 

C_DEPS += \
./Core/Src/button.d \
./Core/Src/buzzer.d \
./Core/Src/clock.d \
./Core/Src/comms.d \
./Core/Src/drone.d \
./Core/Src/enhancements.d \
./Core/Src/game_link.d \
./Core/Src/habitat.d \
./Core/Src/hud.d \
./Core/Src/laser.d \
./Core/Src/main.d \
./Core/Src/nav.d \
./Core/Src/oled.d \
./Core/Src/oled_bus.d \
./Core/Src/sensors.d \
./Core/Src/soft_i2c.d \
./Core/Src/stm32l4xx_hal_msp.d \
./Core/Src/stm32l4xx_it.d \
./Core/Src/sys_stubs.d \
./Core/Src/sysmem.d \
./Core/Src/system_stm32l4xx.d \
./Core/Src/tele_oled.d \
./Core/Src/tilt.d \
./Core/Src/tof.d \
./Core/Src/turret.d \
./Core/Src/uart_rx.d \
./Core/Src/vl53l0x.d 


# Each subdirectory must supply rules for building sources it contributes
Core/Src/%.o Core/Src/%.su Core/Src/%.cyclo: ../Core/Src/%.c Core/Src/subdir.mk
	arm-none-eabi-gcc "$<" -mcpu=cortex-m4 -std=gnu11 -g3 -DDEBUG -DUSE_HAL_DRIVER -DSTM32L4S5xx -c -I../Core/Inc -I../Drivers/STM32L4xx_HAL_Driver/Inc -I../Drivers/STM32L4xx_HAL_Driver/Inc/Legacy -I../Drivers/CMSIS/Device/ST/STM32L4xx/Include -I../Drivers/CMSIS/Include -O0 -ffunction-sections -fdata-sections -Wall -fstack-usage -fcyclomatic-complexity -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" --specs=nano.specs -mfpu=fpv4-sp-d16 -mfloat-abi=hard -mthumb -o "$@"

clean: clean-Core-2f-Src

clean-Core-2f-Src:
	-$(RM) ./Core/Src/button.cyclo ./Core/Src/button.d ./Core/Src/button.o ./Core/Src/button.su ./Core/Src/buzzer.cyclo ./Core/Src/buzzer.d ./Core/Src/buzzer.o ./Core/Src/buzzer.su ./Core/Src/clock.cyclo ./Core/Src/clock.d ./Core/Src/clock.o ./Core/Src/clock.su ./Core/Src/comms.cyclo ./Core/Src/comms.d ./Core/Src/comms.o ./Core/Src/comms.su ./Core/Src/drone.cyclo ./Core/Src/drone.d ./Core/Src/drone.o ./Core/Src/drone.su ./Core/Src/enhancements.cyclo ./Core/Src/enhancements.d ./Core/Src/enhancements.o ./Core/Src/enhancements.su ./Core/Src/game_link.cyclo ./Core/Src/game_link.d ./Core/Src/game_link.o ./Core/Src/game_link.su ./Core/Src/habitat.cyclo ./Core/Src/habitat.d ./Core/Src/habitat.o ./Core/Src/habitat.su ./Core/Src/hud.cyclo ./Core/Src/hud.d ./Core/Src/hud.o ./Core/Src/hud.su ./Core/Src/laser.cyclo ./Core/Src/laser.d ./Core/Src/laser.o ./Core/Src/laser.su ./Core/Src/main.cyclo ./Core/Src/main.d ./Core/Src/main.o ./Core/Src/main.su ./Core/Src/nav.cyclo ./Core/Src/nav.d ./Core/Src/nav.o ./Core/Src/nav.su ./Core/Src/oled.cyclo ./Core/Src/oled.d ./Core/Src/oled.o ./Core/Src/oled.su ./Core/Src/oled_bus.cyclo ./Core/Src/oled_bus.d ./Core/Src/oled_bus.o ./Core/Src/oled_bus.su ./Core/Src/sensors.cyclo ./Core/Src/sensors.d ./Core/Src/sensors.o ./Core/Src/sensors.su ./Core/Src/soft_i2c.cyclo ./Core/Src/soft_i2c.d ./Core/Src/soft_i2c.o ./Core/Src/soft_i2c.su ./Core/Src/stm32l4xx_hal_msp.cyclo ./Core/Src/stm32l4xx_hal_msp.d ./Core/Src/stm32l4xx_hal_msp.o ./Core/Src/stm32l4xx_hal_msp.su ./Core/Src/stm32l4xx_it.cyclo ./Core/Src/stm32l4xx_it.d ./Core/Src/stm32l4xx_it.o ./Core/Src/stm32l4xx_it.su ./Core/Src/sys_stubs.cyclo ./Core/Src/sys_stubs.d ./Core/Src/sys_stubs.o ./Core/Src/sys_stubs.su ./Core/Src/sysmem.cyclo ./Core/Src/sysmem.d ./Core/Src/sysmem.o ./Core/Src/sysmem.su ./Core/Src/system_stm32l4xx.cyclo ./Core/Src/system_stm32l4xx.d ./Core/Src/system_stm32l4xx.o ./Core/Src/system_stm32l4xx.su ./Core/Src/tele_oled.cyclo ./Core/Src/tele_oled.d ./Core/Src/tele_oled.o ./Core/Src/tele_oled.su ./Core/Src/tilt.cyclo ./Core/Src/tilt.d ./Core/Src/tilt.o ./Core/Src/tilt.su ./Core/Src/tof.cyclo ./Core/Src/tof.d ./Core/Src/tof.o ./Core/Src/tof.su ./Core/Src/turret.cyclo ./Core/Src/turret.d ./Core/Src/turret.o ./Core/Src/turret.su ./Core/Src/uart_rx.cyclo ./Core/Src/uart_rx.d ./Core/Src/uart_rx.o ./Core/Src/uart_rx.su ./Core/Src/vl53l0x.cyclo ./Core/Src/vl53l0x.d ./Core/Src/vl53l0x.o ./Core/Src/vl53l0x.su

.PHONY: clean-Core-2f-Src

