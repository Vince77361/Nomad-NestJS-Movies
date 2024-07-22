/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('search')
  Search(@Query('year') searchingYear: string) {
    return `we are searching for a movie, made after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  CreateOne(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    return this.MoviesService.CreateOne(movieData);
  }

  @Delete(':id')
  DeleteOne(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id') // 일부분만 업데이트할때 Patch, 전체를 업데이트할때 Put
  PatchOne(@Param('id') movieId: number, @Body() movieData) {
    return this.MoviesService.UpdateOne(movieId, movieData);
  }
}
